import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

import {
  PRACTICE_CATEGORIES,
  PRACTICE_PROGRESS_STATUS,
} from "../config/constants.js";
import { instruments } from "./instruments.js";

export const practiceCategoryEnum = pgEnum(
  "practice_category",
  PRACTICE_CATEGORIES,
);

export const practiceStatusEnum = pgEnum(
  "practice_progress_status",
  PRACTICE_PROGRESS_STATUS,
);

export const practiceSessions = pgTable("practice_sessions", {
  id: serial("id").primaryKey(),

  status: practiceStatusEnum("status").notNull().default("to-practice"),

  instrumentId: integer("instrument_id").references(() => instruments.id, {
    onDelete: "set null",
  }),

  category: practiceCategoryEnum("category").notNull(),

  startedAt: timestamp("started_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),

  durationMs: integer("duration_ms").notNull(),

  notes: text("notes"),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
});

export type PracticeSession = typeof practiceSessions.$inferSelect;
