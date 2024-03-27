import { cache } from "react";

import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

import db from "./drizzle";
import { courses, userProgress } from "./schema";

/** Get userProgress of current auth user. */
export const getUserProgress = cache(async () => {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });
  return data;
});

/** Get a list of all courses. */
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});

/** Get course by id. */
export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // Todo: Populate units and lessons.
  });
  return data;
});
