-- CreateTable
CREATE TABLE "medicines" (
    "id" SERIAL NOT NULL,
    "medicine_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "disease" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiry_date" TIMESTAMP(3) NOT NULL,
    "last_check_date" TIMESTAMP(3) NOT NULL,
    "stock" INTEGER NOT NULL,
    "max_stock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "medicines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "struct_number" TEXT NOT NULL,
    "medicine_code" TEXT NOT NULL,
    "date_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" INTEGER NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "additional_info" TEXT,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "medicines_medicine_code_key" ON "medicines"("medicine_code");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_medicine_code_fkey" FOREIGN KEY ("medicine_code") REFERENCES "medicines"("medicine_code") ON DELETE RESTRICT ON UPDATE CASCADE;
