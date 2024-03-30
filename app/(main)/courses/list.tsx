"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";
import Image from "next/image";
import { CircleX } from "lucide-react";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;
    if (id === activeCourseId) {
      return router.push("/learn");
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() =>
        toast.error("Something went wrong :/"),
      );
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.length > 0 ? (
        courses.map((course) => (
          <Card
            key={course.id}
            id={course.id}
            title={course.title}
            imgSrc={course.imageSrc}
            onClick={onClick}
            disabled={false}
            active={course.id === activeCourseId}
          />
        ))
      ) : (
        <div className="flex w-full font-semibold">
          {" No Courses found! :("}
        </div>
      )}
    </div>
  );
};
