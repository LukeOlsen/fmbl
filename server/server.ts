import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import * as bodyParser from "body-parser";
import teams from "./teams";
import { creatCache, cache } from "./cache/cache";
// import * as pino from "express-pino-logger";

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const app = express();
app.use("/api/team", teams);
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

app.get("/api/greeting", (req: any, res: any) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get("/api/cache", (req: any, res: any) => {
  res.send(cache);
});

app.listen(3001, async () => {
  await creatCache();
  console.log("Express server is running on localhost:3001");
});

process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});
