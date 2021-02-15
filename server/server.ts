import express from "express";
import * as bodyParser from "body-parser";
// import * as pino from "express-pino-logger";

export const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

app.get("/api/greeting", (req: any, res: any) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get("/api/test", (req:any, res:any) => {
    res.send({myname: 'luke'})
})

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
