import { PrismaClient } from "@/generated/prisma";
import DacAmpClient from "./DacAmpClient";

const prisma = new PrismaClient();

export default async function DacAmpPage() {
  const dacAmps = await prisma.dacAmp.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <DacAmpClient dacAmps={dacAmps} />;
}
