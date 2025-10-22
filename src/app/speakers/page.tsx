import SpeakersClient from "./SpeakersClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function SpeakersPage() {
  const speakers = await prisma.speaker.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <SpeakersClient speakers={speakers} />;
}
