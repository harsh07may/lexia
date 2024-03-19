import { cache } from "react";

import { courses, userProgress } from "./schema";
import db from "./drizzle";
import { auth } from "@clerk/nextjs";
import { and, eq, like } from "drizzle-orm";

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }
  // const query = await db
  //   .select()
  //   .from(userProgress)
  //   .leftJoin(courses, eq(userProgress.userId, courses.id))
  //   .where(eq(userProgress.userId, userId))
  //   .limit(1);
  // const queryData = query[0];

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  return data;
});

export const getCourses = cache(async () => {
  // Using SQL-like syntax.
  const data = await db.select().from(courses);

  // Using Query Syntax.
  // const data2 = await db.query.courses.findMany();
  return data;
});
