CREATE TYPE "public"."song_purpose" AS ENUM('learning', 'writing');--> statement-breakpoint
ALTER TABLE "songs" ADD COLUMN "purpose" "song_purpose" NOT NULL;