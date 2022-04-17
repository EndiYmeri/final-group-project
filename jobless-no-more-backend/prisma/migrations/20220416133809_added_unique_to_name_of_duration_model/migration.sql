/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Duration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Duration_name_key" ON "Duration"("name");
