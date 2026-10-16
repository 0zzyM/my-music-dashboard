import { pgTable, serial, text, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const songPurposeEnum = pgEnum("song_purpose", ["learning", "writing"]);

export const songs = pgTable("songs", {
  id: serial("id").primaryKey(),
  purpose: songPurposeEnum("purpose").notNull(),
  title: text("title").notNull(),
  artist: text("artist"),
  notes: text("notes"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
});

export type Song = typeof songs.$inferSelect;
