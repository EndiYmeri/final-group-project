/*
  Warnings:

  - You are about to alter the column `totalSpend` on the `clientUser` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "totalSpend" REAL NOT NULL DEFAULT 0,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "location" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "paymentVerified" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_clientUser" ("email", "firstName", "id", "image", "lastName", "location", "password", "paymentVerified", "rating", "totalSpend") SELECT "email", "firstName", "id", "image", "lastName", "location", "password", "paymentVerified", "rating", "totalSpend" FROM "clientUser";
DROP TABLE "clientUser";
ALTER TABLE "new_clientUser" RENAME TO "clientUser";
CREATE UNIQUE INDEX "clientUser_email_key" ON "clientUser"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
