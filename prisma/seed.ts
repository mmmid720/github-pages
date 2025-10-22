import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  // Delete existing data
  await prisma.headphone.deleteMany();
  await prisma.speaker.deleteMany();
  await prisma.dacAmp.deleteMany();

  // Add initial headphones
  const headphones = await prisma.headphone.createMany({
    data: [
      {
        brand: "Sennheiser",
        model: "HD 660S2",
        fullName: "Sennheiser HD 660S2",
        description: "오픈형 하이엔드",
        price: 749000,
        imageUrl:
          "https://shop-phinf.pstatic.net/20241023_293/1729673646093O3JpK_JPEG/43555354999852226_1705268401.jpg?type=m510",
        type: "유선",
        category: "오픈형",
      },
      {
        brand: "Sony",
        model: "MDR-MV1",
        fullName: "Sony MDR-MV1",
        description: "오픈형 스튜디오 모니터링",
        price: 498000,
        imageUrl: "/images/sony_mdr-mv1.png",
        type: "유선",
        category: "오픈형",
      },
      {
        brand: "B&W",
        model: "Px7 s2e",
        fullName: "B&W Px7 s2e",
        description: "블루투스",
        price: 464900,
        imageUrl: "/images/b&w_px7-s2e.png",
        type: "무선",
        category: "블루투스",
      },
    ],
  });

  // Add initial speakers
  const speakers = await prisma.speaker.createMany({
    data: [
      {
        brand: "EDIFIER",
        model: "MR4 EDIFIER",
        fullName: "EDIFIER MR4",
        description: "스튜디오 모니터",
        price: 99000,
        imageUrl:
          "https://shop-phinf.pstatic.net/20241209_129/1733722442593Db9Tx_JPEG/62312069627560939_1062862582.jpg?type=m510",
        type: "유선",
        category: "스튜디오 모니터",
      },
      {
        brand: "Marshall",
        model: "Woburn III",
        fullName: "Marshall Woburn III",
        description: "블루투스",
        price: 468000,
        imageUrl: "/images/marshall_woburn-iii.png",
        type: "무선",
        category: "블루투스",
      },
      {
        brand: "HarmanKardon",
        model: "AURA STUDIO 4",
        fullName: "HarmanKardon AURA STUDIO 4",
        description: "인테리어",
        price: 279000,
        imageUrl:
          "https://shop-phinf.pstatic.net/20241208_112/1733631633489Hd9f9_JPEG/46876125314281580_2088554680.jpg?type=m510",
        type: "유선/무선",
        category: "인테리어",
      },
    ],
  });

  // Add initial DAC/AMPs
  const dacAmps = await prisma.dacAmp.createMany({
    data: [
      {
        brand: "Qudelix",
        model: "T71 USB DAC",
        fullName: "Qudelix-T71 USB DAC",
        description: "20-Band EQ 디스플레이 마이크지원",
        price: 279200,
        imageUrl:
          "https://shop-phinf.pstatic.net/20240705_131/17201366992394k5qc_PNG/31030379506214768_2020642195.png?type=m510",
        type: "유선",
        category: "USB DAC",
      },
      {
        brand: "Qudelix",
        model: "5K",
        fullName: "Qudelix-5K",
        description: "블루투스",
        price: 108000,
        imageUrl:
          "https://shop-phinf.pstatic.net/20240113_73/1705101848200kBVSm_JPEG/106237736913589939_828609095.jpeg?type=m510",
        type: "무선",
        category: "블루투스",
      },
      {
        brand: "Topping",
        model: "DX3 PRO+ DAC",
        fullName: "Topping DX3 PRO+ DAC",
        description: "블루투스 볼륨 노브",
        price: 198000,
        imageUrl:
          "https://shop-phinf.pstatic.net/20231103_63/1699015879433ur523_JPEG/30858504985575252_1518927265.jpeg?type=m510",
        type: "유선/무선",
        category: "블루투스",
      },
    ],
  });

  console.log(`Seeded ${headphones.count} headphones`);
  console.log(`Seeded ${speakers.count} speakers`);
  console.log(`Seeded ${dacAmps.count} DAC/AMPs`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
