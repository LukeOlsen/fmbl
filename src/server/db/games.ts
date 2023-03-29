import { prisma } from "../server";

// a prisma query to get all the games for a team
// where the team is either the home team or the away team
// search by home_team_id or away_team_id
// and the season is the current year
// and the home_points is not null
// and the away_points is not null

// select the home_team_id, home_points, away_points, away_team_id
// and the away_team, away_team_points, home_team, home_team_points
// and the season, and the week

// order by the season and the week

// return the games

export const findGames = async (teamId: number, season: number) => {
  const games = await prisma.games.findMany({
    where: {
      OR: [
        {
          home_team_id: teamId,
        },
        {
          away_team_id: teamId,
        },
      ],
      season: season ? season : new Date().getFullYear(),
      home_points: {
        not: null,
      },
      away_points: {
        not: null,
      },
    },
    select: {
      id: true,
      home_team_id: true,
      home_points: true,
      away_points: true,
      away_team_id: true,
      away_team: true,
      home_team: true,
      season: true,
      week: true,
    },
    orderBy: {
      week: "asc",
    },
  });
  //   await prisma.$disconnect();

  return games;
};
