"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Settings, User, Home, Bell } from "lucide-react";
import { useSheet } from "../context/sheet-context";

export function ScrollAreaDemo() {
  return (
    <div className="border border-teal-200 rounded-md w-full">
      <ScrollArea className="h-72 custom-scrollbar p-4">
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-teal-800">
            ScrollArea Example
          </h4>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="p-4 border border-teal-100 rounded-md">
              <p>Item {i + 1}</p>
              <p className="text-sm text-gray-500">
                This is a scrollable content area with custom scrollbar styling.
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export function CollapsibleDemo() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <h4 className="text-lg font-medium text-teal-800">Collapsible Example</h4>

      <Collapsible className="border border-teal-200 rounded-md overflow-hidden">
        <CollapsibleTrigger className="bg-teal-50 hover:bg-teal-100">
          Section 1
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4">
          <p className="py-2 text-sm">
            This is the content for section 1. It can contain any elements you
            want.
          </p>
          <p className="py-2 text-sm">
            The content will smoothly animate when opening and closing.
          </p>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible className="border border-teal-200 rounded-md overflow-hidden">
        <CollapsibleTrigger className="bg-teal-50 hover:bg-teal-100">
          Section 2
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4">
          <p className="py-2 text-sm">
            This is the content for section 2. You can put any content here.
          </p>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible className="border border-teal-200 rounded-md overflow-hidden">
        <CollapsibleTrigger className="bg-teal-50 hover:bg-teal-100">
          Section 3
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4">
          <p className="py-2 text-sm">
            This is the content for section 3. It can contain any elements.
          </p>
          <div className="py-2 flex gap-2">
            <button className="px-3 py-1 bg-teal-800 text-white rounded-md text-sm">
              Action 1
            </button>
            <button className="px-3 py-1 bg-white border border-teal-800 text-teal-800 rounded-md text-sm">
              Action 2
            </button>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

export function SheetDemo() {
  return (
    <div className="space-y-4 w-full">
      <h4 className="text-lg font-medium text-teal-800">Sheet Examples</h4>

      <div className="flex flex-wrap gap-4">
        <Sheet>
          <SheetTrigger className="px-4 py-2">Open Right Sheet</SheetTrigger>
          <SheetContent>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-800">
                Right Side Sheet
              </h3>
              <p>This sheet slides in from the right side of the screen.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Home className="h-5 w-5 text-teal-800" />
                  <span>Dashboard</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <User className="h-5 w-5 text-teal-800" />
                  <span>Profile</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Bell className="h-5 w-5 text-teal-800" />
                  <span>Notifications</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Settings className="h-5 w-5 text-teal-800" />
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger className="px-4 py-2">Open Left Sheet</SheetTrigger>
          <SheetContent>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-800">
                Left Side Sheet
              </h3>
              <p>This sheet slides in from the left side of the screen.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Home className="h-5 w-5 text-teal-800" />
                  <span>Dashboard</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <User className="h-5 w-5 text-teal-800" />
                  <span>Profile</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Bell className="h-5 w-5 text-teal-800" />
                  <span>Notifications</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  <Settings className="h-5 w-5 text-teal-800" />
                  <span>Settings</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger className="px-4 py-2">Open Top Sheet</SheetTrigger>
          <SheetContent>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-800">Top Sheet</h3>
              <p>This sheet slides in from the top of the screen.</p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-teal-800 text-white rounded-md">
                  Action 1
                </button>
                <button className="px-4 py-2 bg-white border border-teal-800 text-teal-800 rounded-md">
                  Action 2
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger className="px-4 py-2">Open Bottom Sheet</SheetTrigger>
          <SheetContent>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-teal-800">Bottom Sheet</h3>
              <p>This sheet slides in from the bottom of the screen.</p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-teal-800 text-white rounded-md">
                  Action 1
                </button>
                <button className="px-4 py-2 bg-white border border-teal-800 text-teal-800 rounded-md">
                  Action 2
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="mt-8">
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 bg-teal-800 text-white rounded-md">
              <Menu className="h-5 w-5" />
              <span>Open Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-teal-800">
                Application Menu
              </h3>

              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-gray-500 px-2">
                  MAIN MENU
                </h4>
                <div className="space-y-1">
                  {["Dashboard", "E-Prescriptions", "My Medicines"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100"
                      >
                        <Home className="h-4 w-4" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-gray-500 px-2">
                  HEALTH MANAGEMENT
                </h4>
                <div className="space-y-1">
                  {["Appointments", "Medical Records"].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100"
                    >
                      <Bell className="h-4 w-4" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="space-y-1">
                  {["Settings", "Help & Support"].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="h-4 w-4" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
// Somewhere in the app

const SomeButton = () => {
  const { setOpen, setSide } = useSheet();

  return (
    <button
      onClick={() => {
        setSide("right");
        setOpen(true);
      }}
    >
      Open Sheet from anywhere
    </button>
  );
};

export function ComponentDemo() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-teal-800">
        Custom Components Demo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-teal-800 mb-4">
            ScrollArea
          </h3>
          <ScrollAreaDemo />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-teal-800 mb-4">
            Collapsible
          </h3>
          <CollapsibleDemo />
        </div>
      </div>
      <SomeButton />
    </div>
  );
}
