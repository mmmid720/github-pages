import DacAmpClient from "./DacAmpClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function DacAmpPage() {
  const dacAmps = await prisma.dacAmp.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <DacAmpClient dacAmps={dacAmps} />;
}
