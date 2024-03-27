import { getCourses, getUserProgress } from "@/db/queries";

import { List } from "@/app/(main)/courses/list";

export default async function CoursesPage() {
  const coursesData = getCourses();
  const userProgressData = getUserProgress();

  // Prevents network waterfalls since both requests
  // run parallel-ly instead of sequentially awaiting.
  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ]);

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
}
