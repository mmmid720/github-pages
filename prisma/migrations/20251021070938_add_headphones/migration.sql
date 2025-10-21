-- CreateTable
CREATE TABLE "Headphone" (
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

    CONSTRAINT "Headphone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Headphone_brand_idx" ON "Headphone"("brand");

-- CreateIndex
CREATE INDEX "Headphone_fullName_idx" ON "Headphone"("fullName");

-- CreateIndex
CREATE INDEX "Headphone_type_idx" ON "Headphone"("type");
