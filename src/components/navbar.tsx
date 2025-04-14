import { Pill } from "lucide-react";
import React from "react";
import Button from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Pill className="h-6 w-6 text-teal-600" />
          <span className="text-xl font-bold">GovPharm</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 ">
          <Link
            href="/"
            className="text-sm font-medium hover:underline hover:text-teal-500"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:underline hover:text-teal-500"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:underline hover:text-teal-500"
          >
            How It Works
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:underline hover:text-teal-500"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register" className="bg-teal-500">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
