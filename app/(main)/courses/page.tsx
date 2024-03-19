import { List } from "@/app/(main)/courses/list";
import { getCourses, getUserProgress } from "@/db/queries";

export default async function CoursesPage() {
  const data = await getCourses();
  const userData = await getUserProgress();

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List courses={data} activeCourseId={userData?.activeCourseId} />
    </div>
  );
}
