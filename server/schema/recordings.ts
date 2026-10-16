import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { songs } from "./songs.js";

export const recordings = pgTable("recordings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  path: text("path").notNull(),
  durationMs: integer("duration_ms").notNull(),
  notes: text("notes"),
  songId: integer("song_id").references(() => songs.id, {
    onDelete: "set null",
  }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
});

export type Recording = typeof recordings.$inferSelect;
