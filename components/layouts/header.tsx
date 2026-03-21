"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import VN from "country-flag-icons/react/3x2/VN";
import GB from "country-flag-icons/react/3x2/GB";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Trung tâm trợ giúp", href: "/help" },
  { label: "Tính năng", href: "/features" },
  { label: "Quyền riêng tư", href: "/pricing" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full py-4 bg-main text-white flex items-center justify-between px-10 fixed top-0 left-0 right-0 z-50">
        <div className="flex gap-20 justify-between items-center w-full">
          <div className="flex items-center ">
            <Image
              src="/what-app.svg"
              alt="What App Logo"
              width={130}
              height={40}
            />
          </div>
          <div className=" gap-4 xl:gap-6 justify-start items-center px-10 w-full xl:flex hidden">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="group relative flex items-center gap-1.5 hover:opacity-80  font-extralight text-[12px]! xl:text-[15px]! cursor-pointer"
              >
                <Link href={link.href}>{link.label}</Link>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300">
                  <span className="absolute bottom-0 w-0 left-1/2 group-hover:w-1/2 h-0.5 bg-green-400   transition-all duration-370"></span>
                  <span className="absolute bottom-0 w-0 right-1/2 group-hover:w-1/2 h-0.5 bg-green-400 transition-all duration-370"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button className="px-9! py-5! hidden xl:flex  bg-whatsapp rounded-full text-md cursor-pointer text-white hover:bg-whatsapp/80">
            Đăng nhập
          </Button>
          <div className="flex justify-center items-center gap-3 text-md">
            <button className=" items-center gap-1.5 hover:opacity-80 cursor-pointer hidden md:flex">
              <VN title="Tiếng Việt" className="w-6 h-4 rounded-sm" />
              <span>VN</span>
            </button>
            <span className="opacity-60 hidden md:flex">|</span>
            <button className=" items-center gap-1.5 hover:opacity-80 cursor-pointer hidden md:flex">
              <GB title="English" className="w-6 h-4 rounded-sm" />
              <span>EN</span>
            </button>
          </div>

          {/* Hamburger / X button */}
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col justify-center items-center xl:hidden cursor-pointer relative w-5 h-5"
            aria-label="Mở menu"
          >
            <span
              className={`w-5 h-0.5 bg-white block absolute transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white block transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white block absolute transition-all duration-300 ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-1"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer open={open} onOpenChange={setOpen} direction="left">
        <DrawerContent className="bg-main text-white border-none p-0 rounded-none!">
          <DrawerHeader className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10 flex-row">
            <DrawerTitle>
              <Image
                src="/what-app.svg"
                alt="What App Logo"
                width={110}
                height={35}
              />
            </DrawerTitle>
            <DrawerClose asChild>
              <button
                className="relative w-5 h-5 cursor-pointer "
                aria-label="Đóng menu"
              >
                <span className="w-5 h-0.5 bg-white block absolute top-1/2 -translate-y-1/2 rotate-45 transition-all duration-300" />
                <span className="w-5 h-0.5 bg-white block absolute top-1/2 -translate-y-1/2 -rotate-45 transition-all duration-300" />
              </button>
            </DrawerClose>
          </DrawerHeader>

          {/* Nav Links */}
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <DrawerClose key={link.href} asChild>
                <Link
                  href={link.href}
                  className="py-3 px-4 rounded-lg text-white/90 hover:bg-white/10 hover:text-white transition-colors duration-200 text-[15px] font-medium"
                >
                  {link.label}
                </Link>
              </DrawerClose>
            ))}
          </nav>

          {/* Language + Login */}
          <div className="mt-auto px-6 pb-8 flex flex-col gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 hover:opacity-80 cursor-pointer">
                <VN title="Tiếng Việt" className="w-6 h-4 rounded-sm" />
                <span className="text-sm">VN</span>
              </button>
              <span className="opacity-40">|</span>
              <button className="flex items-center gap-1.5 hover:opacity-80 cursor-pointer">
                <GB title="English" className="w-6 h-4 rounded-sm" />
                <span className="text-sm">EN</span>
              </button>
            </div>
            <Button className="w-full py-5! bg-whatsapp rounded-full text-md cursor-pointer text-white hover:bg-whatsapp/80">
              Đăng nhập
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
