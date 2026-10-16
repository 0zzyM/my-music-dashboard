import { pgTable, serial, pgEnum } from "drizzle-orm/pg-core";
import { INSTRUMENTS } from "../config/constants.js";

export const instrumentsEnum = pgEnum("instrument_type", INSTRUMENTS);

export const instruments = pgTable("instruments", {
  id: serial("id").primaryKey(),
  name: instrumentsEnum("name").notNull().unique(),
});

export type Instrument = typeof instruments.$inferSelect;
