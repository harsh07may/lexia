import { drizzle } from "drizzle-orm/neon-http";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import "dotenv/config";

import * as schema from "@/db/schema";
import { courseData, lessonsData, unitsData } from "./data";

const sql: NeonQueryFunction<boolean, boolean> = neon(
  process.env.DATABASE_URL!,
);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values(courseData);
    await db.insert(schema.units).values(unitsData);
    await db.insert(schema.lessons).values(lessonsData);
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man" ?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        text: "el hombre",
        correct: true,
        imageSrc: "man.svg",
        audioSrc: "/es_man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        text: "la mujer",
        correct: false,
        imageSrc: "woman.svg",
        audioSrc: "/es_woman.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        text: "el robot",
        correct: false,
        imageSrc: "robot.svg",
        audioSrc: "/es_robot.mp3",
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database.");
  }
};

main();
