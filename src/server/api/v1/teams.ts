import express from "express";
import { prisma } from "../../server";
import { findTeamInfo } from "../../db/teams";
import { findGames } from "../../db/games";
import { dataToString } from "../../helpers";

const router = express.Router();

type teamScores = {
  team1: number[];
  team2: number[];
};

type gameScore = {
  home_team_id: number | null;
  home_points: number | null;
  away_points: number | null;
  away_team_id: number | null;
};

// Take an array of two teams scores
// and find the averages between the two
const averageTeamScores = (
  twoScores: teamScores
): { team1: number; team2: number } => {
  const team1 =
    twoScores.team1.reduce((a, b) => a + b, 0) / twoScores.team1.length;
  const team2 =
    twoScores.team2.reduce((a, b) => a + b, 0) / twoScores.team2.length;
  return { team1, team2 };
};

router.get("/:team", async (req, res) => {
  try {
    console.log("hit");
    const { team } = req.params;
    const { year } = req.query;
    let teams: any | null = await findTeamInfo(Number(team), Number(year));
    teams[0].games = await findGames(Number(team), Number(year));
    teams[0].games = dataToString(teams[0].games);
    return res.json(teams);
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

router.get("/:team/averageScore", async (req, res) => {
  const { team } = req.params;
  const { year } = req.query;

  const team_id: number = Number(team);

  let teamGames: gameScore[] | null = await prisma.games.findMany({
    select: {
      home_team_id: true,
      home_points: true,
      away_points: true,
      away_team_id: true,
    },
    where: {
      OR: [{ home_team_id: team_id }, { away_team_id: team_id }],
      season: Number(year) ? Number(year) : new Date().getFullYear(),
      NOT: [{ home_points: null }],
    },
  });
  let teamTotal: number = 0;
  if (teamGames && teamGames.length > 0) {
    teamGames.forEach((game: gameScore) => {
      if (game.home_team_id === team_id) {
        teamTotal += Number(game.home_points);
      } else {
        teamTotal += Number(game.away_points);
      }
    });
    teamTotal = teamTotal / teamGames.length;
  }
  return res.json(teamTotal);
});

export default router;
