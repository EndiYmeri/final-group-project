-- CreateTable
CREATE TABLE "Duration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
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
INSERT INTO "new_job" ("categoryId", "clientUserId", "content", "dateCreated", "difficultyId", "id", "location", "title") SELECT "categoryId", "clientUserId", "content", "dateCreated", "difficultyId", "id", "location", "title" FROM "job";
DROP TABLE "job";
ALTER TABLE "new_job" RENAME TO "job";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
