import Image from "next/image";
import { Button } from "../ui/button";
import VN from "country-flag-icons/react/3x2/VN";
import GB from "country-flag-icons/react/3x2/GB";
import Link from "next/link";
const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Trung tâm trợ giúp", href: "/help" },
  { label: "Tính năng", href: "/features" },
  { label: "Quyền riêng tư", href: "/pricing" },
  { label: "Liên hệ", href: "/contact" },
];
export default function Header() {
  return (
    <header className="w-full py-4 bg-main text-white flex items-center justify-between px-10 fixed top-0 left-0 right-0">
      <div className="flex gap-20 justify-between items-center w-full">
        <div className="flex items-center ">
          <Image
            src="/what-app.svg"
            alt="What App Logo"
            width={130}
            height={40}
          />
        </div>
        <div className=" gap-4 xl:gap-8 justify-center items-center px-10 w-full xl:flex hidden">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="group relative flex items-center gap-1.5 hover:opacity-80 text-[12px]! xl:text-[16px]! cursor-pointer"
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
        <div className="flex flex-col justify-center items-center gap-1.5 xl:hidden cursor-pointer group relative w-5 h-5">
          <span className="w-5 h-0.5 bg-white block absolute transition-all duration-300 top-1 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:rotate-45"></span>
          <span className="w-5 h-0.5 bg-white block transition-all duration-300 group-hover:opacity-0"></span>
          <span className="w-5 h-0.5 bg-white block absolute transition-all duration-300 bottom-1 group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:-rotate-45"></span>
        </div>
      </div>
    </header>
  );
}
