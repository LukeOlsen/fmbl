import express from "express";
import { findLines } from "../../db/lines";
import { dataToString } from "../../helpers";
import { cache } from "src/server/cache/cache";

const router = express.Router();

// a function that maps the lines to the teams in the cache and returns an average of the lines

router.get("/", async (req, res) => {
  try {
    const { year } = req.query;
    if (!year) {
      return res.status(400).send("Missing year");
    }
    const lines = await findLines(Number(year));
    const stringify: string = dataToString(lines);
    return res.send(stringify);
  } catch (err) {
    console.log(err);
    return res.status(500).send("There was an error retrerving the lines");
  }
});

export default router;
