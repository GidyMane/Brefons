/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
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
import { setWidth } from "@/utils/Redux/slices/SideBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/utils/Redux/Store";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default function SideNavbar({ }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);

    if (observedDiv.current && observedDiv.current.offsetWidth >= 70 && observedDiv?.current.offsetWidth <= 80) {
      dispatch(setWidth(247))
    } else {
      dispatch(setWidth(80))
    }

  }


  const width = useSelector((state: RootState) => state.width.width)
  const dispatch = useDispatch()
  const observedDiv = useRef<HTMLDivElement | null>(null);


  return (
    <div className={`fixed min-w-[${width}px] min-h-screen border-r px-3  pb-10 pt-10 shadow-md`} ref={observedDiv}>
      <div className="justify-center items-start mb-4 p-2 md:flex hidden">
        <h2 className={`text-blue-600 md:text-2xl font-medium ${width < 81 ? "hidden" : "block"}`}>BREFONS</h2>
      </div>
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
          {
            title: "Home",
            menu: [
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
            ],
          },
          {
            title: "Project Planning",
            menu: [
              // Header "Project Planning"

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
            ]
          }



        ]}
      />

      <div className=" fixed  p-2 bottom-0 mt-10 " style={{
        marginLeft: `0`,
        width: `${width - 10}px`
      }}>
        <div className="flex flex-col">
          <TooltipProvider>
            {width < 81 ? (
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold mb-2">Bien</h3>
                    <p className="text-sm text-gray-400 font-medium">
                      Bien@gmail.com
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>

            ) : (
              <>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <h3 className="text-sm font-bold mb-2">Bien</h3>
                  <p className="text-sm text-gray-300 font-medium">
                    Bien@gmail.com
                  </p>
                </div>
              </>
            )}





          </TooltipProvider>
        </div>
      </div>
    </div >
  );
}
