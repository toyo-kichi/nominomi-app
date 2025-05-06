import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const saveSession = async (groupId: string, token: string) => {
  await prisma.session.create({
    data: {
      groupId,
      token,
      expiresAt: new Date(Date.now() + 3600 * 1000),
    },
  });
};
