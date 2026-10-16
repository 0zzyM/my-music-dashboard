CREATE TYPE "public"."instrument_type" AS ENUM('electric-guitar', 'classical-guitar', 'acoustic-guitar', 'bass-guitar', 'piano', 'keyboard', 'drums', 'violin', 'cello');--> statement-breakpoint
CREATE TYPE "public"."practice_category" AS ENUM('song', 'technique', 'theory', 'ear-training');--> statement-breakpoint
CREATE TYPE "public"."practice_progress_status" AS ENUM('to-practice', 'practicing', 'done');--> statement-breakpoint
CREATE TABLE "instruments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" "instrument_type" NOT NULL,
	CONSTRAINT "instruments_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "practice_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" "practice_progress_status" DEFAULT 'to-practice' NOT NULL,
	"instrument_id" integer,
	"category" "practice_category" NOT NULL,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"duration_ms" integer NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "recordings" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"path" text NOT NULL,
	"duration_ms" integer NOT NULL,
	"notes" text,
	"song_id" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "songs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"artist" text,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "practice_sessions" ADD CONSTRAINT "practice_sessions_instrument_id_instruments_id_fk" FOREIGN KEY ("instrument_id") REFERENCES "public"."instruments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "recordings" ADD CONSTRAINT "recordings_song_id_songs_id_fk" FOREIGN KEY ("song_id") REFERENCES "public"."songs"("id") ON DELETE set null ON UPDATE no action;