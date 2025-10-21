-- CreateTable
CREATE TABLE "Speaker" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Speaker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DacAmp" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DacAmp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Speaker_brand_idx" ON "Speaker"("brand");

-- CreateIndex
CREATE INDEX "Speaker_fullName_idx" ON "Speaker"("fullName");

-- CreateIndex
CREATE INDEX "Speaker_type_idx" ON "Speaker"("type");

-- CreateIndex
CREATE INDEX "DacAmp_brand_idx" ON "DacAmp"("brand");

-- CreateIndex
CREATE INDEX "DacAmp_fullName_idx" ON "DacAmp"("fullName");

-- CreateIndex
CREATE INDEX "DacAmp_type_idx" ON "DacAmp"("type");
