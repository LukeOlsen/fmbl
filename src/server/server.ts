import * as dotenv from "dotenv";
dotenv.config();
// import compression from "compression";
import express, { Router } from "express";
import helmet from "helmet";
import * as bodyParser from "body-parser";
import api from "./api";
import { creatCache, cache } from "./cache";
// import * as pino from "express-pino-logger";

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);
const router = Router();
router.use("/api", api);

router.get("/greeting", (req, res) => {
  res.send("Welcome to the API");
});

// router.use(compression());

// app.get("/api/greeting", (req: any, res: any) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.get("/api/cache", (req: any, res: any) => {
//   res.send(cache);
// });

app.use(router);

app.listen(3001, async () => {
  await creatCache();
  console.log("Express server is running on localhost:3001");
});

process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});
