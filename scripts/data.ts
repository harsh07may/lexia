import { challenges } from "@/db/schema";

export const courseData = [
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
];

export const unitsData = [
  {
    id: 1,
    courseId: 1,
    title: "Unit 1",
    description: "Learn the Basics of Spanish",
    order: 1,
  },
];

export const lessonsData = [
  {
    id: 1,
    unitId: 1,
    order: 1,
    title: "Nouns",
  },
];
