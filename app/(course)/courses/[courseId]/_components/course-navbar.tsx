import { Chapter, Course, UserProgress } from "@prisma/client";

import { NavbarRoutes } from "../../../../../components/navbar-routes";

import { CourseMobileSidebar } from "./course-mobile-sidebar";
import { SafeProfile } from "../../../../../types";
import React from "react";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
  currentProfile?: SafeProfile | null;
}

export const CourseNavbar = ({
  course,
  progressCount,
//   currentProfile,
}: CourseNavbarProps) => {
  // Log to console currentProfile with component name to identify
//   console.log("CourseNavbar currentProfile", currentProfile);

  return (
    <div className="p-4 border-b h-full flex items-center shadow-sm">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};
