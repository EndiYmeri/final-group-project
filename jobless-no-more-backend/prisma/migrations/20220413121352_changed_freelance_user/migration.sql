/*
  Warnings:

  - You are about to alter the column `totalReceived` on the `freelanceUser` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_freelanceUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "totalReceived" REAL NOT NULL DEFAULT 0,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "location" TEXT NOT NULL,
    "bio" TEXT
);
INSERT INTO "new_freelanceUser" ("bio", "email", "firstName", "id", "image", "lastName", "location", "password", "totalReceived") SELECT "bio", "email", "firstName", "id", "image", "lastName", "location", "password", "totalReceived" FROM "freelanceUser";
DROP TABLE "freelanceUser";
ALTER TABLE "new_freelanceUser" RENAME TO "freelanceUser";
CREATE UNIQUE INDEX "freelanceUser_email_key" ON "freelanceUser"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
