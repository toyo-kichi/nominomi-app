import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const createGroup = async (
  groupId: string,
  name: string,
  passcode: string
) => {
  return await prisma.group.create({
    data: {
      id: groupId,
      name,
      passcode,
    },
  });
};

export const findGroupById = async (groupId: string) => {
  return prisma.group.findUnique({
    where: { id: groupId },
  });
};
