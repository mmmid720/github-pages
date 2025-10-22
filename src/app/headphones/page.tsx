import HeadphonesClient from "./HeadphonesClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HeadphonesPage() {
  const headphones = await prisma.headphone.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <HeadphonesClient headphones={headphones} />;
}
