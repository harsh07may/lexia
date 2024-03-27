import { drizzle } from "drizzle-orm/neon-http";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import "dotenv/config";

import * as schema from "@/db/schema";

const sql: NeonQueryFunction<boolean, boolean> = neon(
  process.env.DATABASE_URL!,
);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imgSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Croatian",
        imgSrc: "/hr.svg",
      },
      {
        id: 3,
        title: "Italian",
        imgSrc: "/it.svg",
      },
      {
        id: 4,
        title: "Japanese",
        imgSrc: "/jp.svg",
      },
      {
        id: 5,
        title: "French",
        imgSrc: "/fr.svg",
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database.");
  }
};

main();
