import express from "express";
import { prisma } from "../server";

const router = express.Router();

router.get("/:team", async (req, res) => {
  const { team } = req.params;
  const { year } = req.query;
  const teams: object | null = await prisma.teams.findMany({
    where: {
      school: team,
    },
    include: {
      records: {
        select: {
          total_games: true,
          total_wins: true,
          total_losses: true,
        },
        where: {
          year: Number(year) ? Number(year) : 2020,
        },
      },
      recruits: {
        select: {
          name: true,
          position: true,
          stars: true,
          rating: true,
        },
        where: {
          year: Number(year) ? Number(year) + 1 : 2021,
        },
      },
    },
  });
  await prisma.$disconnect();
  res.send(teams);
});

export default router;
