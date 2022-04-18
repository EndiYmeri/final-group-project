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
    "type" TEXT NOT NULL DEFAULT 'client',
    "rating" INTEGER NOT NULL DEFAULT 0,
    "paymentVerified" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_clientUser" ("email", "firstName", "id", "image", "lastName", "location", "password", "paymentVerified", "rating", "totalSpend") SELECT "email", "firstName", "id", "image", "lastName", "location", "password", "paymentVerified", "rating", "totalSpend" FROM "clientUser";
DROP TABLE "clientUser";
ALTER TABLE "new_clientUser" RENAME TO "clientUser";
CREATE UNIQUE INDEX "clientUser_email_key" ON "clientUser"("email");
CREATE TABLE "new_freelanceUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "totalReceived" REAL NOT NULL DEFAULT 0,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "location" TEXT NOT NULL,
    "bio" TEXT,
    "type" TEXT NOT NULL DEFAULT 'freelancer'
);
INSERT INTO "new_freelanceUser" ("bio", "email", "firstName", "id", "image", "lastName", "location", "password", "totalReceived") SELECT "bio", "email", "firstName", "id", "image", "lastName", "location", "password", "totalReceived" FROM "freelanceUser";
DROP TABLE "freelanceUser";
ALTER TABLE "new_freelanceUser" RENAME TO "freelanceUser";
CREATE UNIQUE INDEX "freelanceUser_email_key" ON "freelanceUser"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
