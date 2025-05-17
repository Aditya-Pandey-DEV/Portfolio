/*
  Warnings:

  - You are about to drop the `Theme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `favicon` on the `SEO` table. All the data in the column will be lost.
  - You are about to drop the column `googleAnalyticsId` on the `SEO` table. All the data in the column will be lost.
  - You are about to drop the column `robotsContent` on the `SEO` table. All the data in the column will be lost.
  - You are about to drop the column `twitterHandle` on the `SEO` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Theme_resumeId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Theme";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "image" TEXT,
    "link" TEXT,
    "resumeId" TEXT NOT NULL,
    CONSTRAINT "Project_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("description", "id", "image", "link", "resumeId", "technologies", "title") SELECT "description", "id", "image", "link", "resumeId", "technologies", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_SEO" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "ogImage" TEXT,
    "twitterTitle" TEXT,
    "twitterDescription" TEXT,
    "twitterImage" TEXT,
    "canonicalUrl" TEXT,
    "resumeId" TEXT NOT NULL,
    CONSTRAINT "SEO_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SEO" ("canonicalUrl", "description", "id", "keywords", "ogDescription", "ogImage", "ogTitle", "resumeId", "title", "twitterDescription", "twitterImage", "twitterTitle") SELECT "canonicalUrl", "description", "id", "keywords", "ogDescription", "ogImage", "ogTitle", "resumeId", "title", "twitterDescription", "twitterImage", "twitterTitle" FROM "SEO";
DROP TABLE "SEO";
ALTER TABLE "new_SEO" RENAME TO "SEO";
CREATE UNIQUE INDEX "SEO_resumeId_key" ON "SEO"("resumeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
