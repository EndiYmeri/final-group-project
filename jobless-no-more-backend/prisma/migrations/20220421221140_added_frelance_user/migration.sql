/*
  Warnings:

  - You are about to drop the column `freelanceUserId` on the `job` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_freelanceUserTojob" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "freelanceUser" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "job" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "dateCreated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "difficultyId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "clientUserId" INTEGER NOT NULL,
    "durationId" INTEGER,
    "published" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "job_clientUserId_fkey" FOREIGN KEY ("clientUserId") REFERENCES "clientUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "job_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "Duration" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_job" ("categoryId", "clientUserId", "content", "dateCreated", "difficultyId", "durationId", "id", "location", "published", "title") SELECT "categoryId", "clientUserId", "content", "dateCreated", "difficultyId", "durationId", "id", "location", "published", "title" FROM "job";
DROP TABLE "job";
ALTER TABLE "new_job" RENAME TO "job";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_freelanceUserTojob_AB_unique" ON "_freelanceUserTojob"("A", "B");

-- CreateIndex
CREATE INDEX "_freelanceUserTojob_B_index" ON "_freelanceUserTojob"("B");
