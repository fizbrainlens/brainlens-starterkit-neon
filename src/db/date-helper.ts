import { timestamp } from "drizzle-orm/pg-core";

export const brainTimestamp = {
    updated_at: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),
    created_at: timestamp("created_at").defaultNow(),
}