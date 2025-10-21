import { PrismaClient } from "@/generated/prisma";
import HeadphonesClient from "./HeadphonesClient";

const prisma = new PrismaClient();

export default async function HeadphonesPage() {
  const headphones = await prisma.headphone.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <HeadphonesClient headphones={headphones} />;
}
