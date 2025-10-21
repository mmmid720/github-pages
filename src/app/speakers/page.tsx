import { PrismaClient } from "@/generated/prisma";
import SpeakersClient from "./SpeakersClient";

const prisma = new PrismaClient();

export default async function SpeakersPage() {
  const speakers = await prisma.speaker.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <SpeakersClient speakers={speakers} />;
}
