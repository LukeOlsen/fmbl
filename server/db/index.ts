import { prisma } from "../server";

export const findTeamInfo = async (
  teamId: number,
  year: number | null = null
) => {
  const teams: object | null = await prisma.teams.findMany({
    where: {
      id: teamId,
    },
    include: {
      records: {
        select: {
          total_games: true,
          total_wins: true,
          total_losses: true,
        },
        where: {
          year: Number(year) ? Number(year) : new Date().getFullYear(),
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
          year: Number(year) ? Number(year) + 1 : new Date().getFullYear() + 1,
        },
      },
    },
  });
  await prisma.$disconnect();

  return teams;
};
