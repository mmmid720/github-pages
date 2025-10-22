import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seed...");

  console.log("Clearing existing data...");
  await prisma.headphone.deleteMany();
  await prisma.speaker.deleteMany();
  await prisma.dacAmp.deleteMany();

  console.log("Database cleared. Add your seed data here if needed.");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
