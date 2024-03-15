/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  LayoutDashboard,
    Settings,
  ChevronRight,
  FileText,
  Cpu,
  Activity,
  Calendar,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          // Header "BREFONS"
          {
            title: "BREFONS",
            href: "/brefons",
            icon: FileText, // Example icon, you can change it
            variant: "default"
          },
          // Reports
          {
            title: "Reports",
            href: "/reports",
            icon: LayoutDashboard,
            variant: "default"
          },
          // Technical Parameters
          {
            title: "Technical Parameters",
            href: "/technical-parameters",
            icon: Cpu, // Example icon, you can change it
            variant: "ghost"
          },
          // Operational Parameters
          {
            title: "Operational Parameters",
            href: "/operational-parameters",
            icon: Cpu, // Example icon, you can change it
            variant: "ghost"
          },
          // Activities
          {
            title: "Activities",
            href: "/activities",
            icon: Activity, // Example icon, you can change it
            variant: "ghost"
          },
          // Header "Project Planning"
          {
            title: "Project Planning",
            href: "/project-planning",
            icon: Calendar, // Example icon, you can change it
            variant: "default"
          },
          // Annual Targets
          {
            title: "Annual Targets",
            href: "/annual-targets",
            icon: Calendar, // Example icon, you can change it
            variant: "ghost"
          },
          // Settings
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
