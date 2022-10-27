import express from "express";
import { findLines } from "../../db/lines";
import { dataToString } from "../../helpers";
import { cache } from "../../cache";
import { Line } from "src/@types/lines";

const router = express.Router();

// a function that maps the lines to the teams in the cache and returns an average of the lines
const averageLines = (lines: Line[], teams: Cache.Teams[]) => {
  let teamLines: {
    [key: string]: {
      id: number;
      team: string | null;
      spreadTrack: number;
    };
  } = {};
  teams?.forEach((team) => {
    teamLines[team.school || "school"] = {
      id: team.id,
      team: team.school,
      spreadTrack: 0,
    };
  });

  lines.forEach((line) => {
    if (
      line.betting_lines &&
      line.betting_lines.length > 0 &&
      teamLines[line.home_team || "school"] &&
      teamLines[line.away_team || "school"]
    ) {
      const spread = line.betting_lines[0].spread;
      if (spread) {
        let homePointDiff =
          Number(line?.home_points) - Number(line?.away_points);
        let awayPointDiff =
          Number(line?.away_points) - Number(line?.home_points);
        if (spread < 0) {
          homePointDiff = homePointDiff + spread;
          awayPointDiff = awayPointDiff - spread;
        } else {
          homePointDiff = homePointDiff - spread;
          awayPointDiff = awayPointDiff + spread;
        }

        teamLines[line.home_team || "school"].spreadTrack += homePointDiff;
        teamLines[line.away_team || "school"].spreadTrack += awayPointDiff;
      }
    }
  });
  return teamLines;
};

router.get("/", async (req, res) => {
  try {
    const { year } = req.query;
    if (!year) {
      return res.status(400).send("Missing year");
    }
    const lines = await findLines(Number(year));
    const avgLines = averageLines(lines, cache.teams || []);
    // sort the lines by the spreadTrack
    const sortedLines = Object.values(avgLines).sort(
      (a, b) => b.spreadTrack - a.spreadTrack
    );
    const stringify: string = dataToString(sortedLines);
    return res.send(stringify);
  } catch (err) {
    console.log(err);
    return res.status(500).send("There was an error retrerving the lines");
  }
});

export default router;
