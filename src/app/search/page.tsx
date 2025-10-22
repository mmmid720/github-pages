import SearchClient from "./SearchClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function SearchPage() {
  const [headphones, speakers, dacAmps] = await Promise.all([
    prisma.headphone.findMany({
      orderBy: { createdAt: "desc" },
    }),
    prisma.speaker.findMany({
      orderBy: { createdAt: "desc" },
    }),
    prisma.dacAmp.findMany({
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <SearchClient
      headphones={headphones}
      speakers={speakers}
      dacAmps={dacAmps}
    />
  );
}
