import { prisma } from "../server";

export const cache: any = {};

export const creatCache = async () => {
  cache.teams = await prisma.teams.findMany({
    select: {
      id: true,
      school: true,
      mascot: true,
      abbreviation: true,
      conference: true,
      division: true,
      color: true,
      logos_0: true,
      logos_1: true,
    },
    orderBy: {
      conference: "asc",
    },
  });
  console.log("cache loaded");
  return cache;
};
