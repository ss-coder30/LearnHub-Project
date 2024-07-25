"use client";

import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const [isTeacherPage, setIsTeacherPage] = useState(false);
  const [isPlayerPage, setIsPlayerPage] = useState(false);

  useEffect(() => {
    setIsTeacherPage(pathname?.startsWith("/teacher") || false);
    setIsPlayerPage(pathname?.includes("/chapter") || false);
  }, [pathname]);

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button className="sm bg-sky-100" variant="ghost">
            <LogOut className="h-4 w-4 mr-2 " />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button className="sm bg-sky-100" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}

      <UserButton afterSignOutUrl="/sign-up" />
    </div>
  );
};
