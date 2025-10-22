import HomeClient from "./HomeClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [headphones, speakers, dacAmps] = await Promise.all([
    prisma.headphone.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.speaker.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.dacAmp.findMany({
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
  ]);

  return (
    <HomeClient
      headphones={headphones}
      speakers={speakers}
      dacAmps={dacAmps}
    />
  );
}
