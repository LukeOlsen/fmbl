import { Line } from "src/@types/lines";
import { prisma } from "../server";

export const findLines = async (season: number) => {
  const lines: Line[] | null = await prisma.games.findMany({
    where: {
      season: season,
    },
    select: {
      id: true,
      home_team: true,
      home_team_id: true,
      away_team: true,
      away_team_id: true,
      home_points: true,
      away_points: true,
      betting_lines: {
        select: {
          home_moneyline: true,
          away_moneyline: true,
          over_under: true,
          formatted_spread: true,
          spread: true,
        },
      },
    },
  });
  await prisma.$disconnect();

  return lines;
};
