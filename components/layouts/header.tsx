import Image from "next/image";
import { Button } from "../ui/button";
import VN from "country-flag-icons/react/3x2/VN";
import GB from "country-flag-icons/react/3x2/GB";

export default function Header() {
  return (
    <header className="w-full py-4 bg-main text-white flex items-center justify-between px-10 fixed top-0 left-0 right-0">
      <div className="flex items-center gap-4">
        <Image
          src="/what-app.svg"
          alt="What App Logo"
          width={130}
          height={40}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button className="px-9! py-5!  bg-whatsapp rounded-full text-md cursor-pointer hover:bg-whatsapp/80">
          Đăng nhập
        </Button>
        <div className="flex justify-center items-center gap-3 text-md">
          <button className="flex items-center gap-1.5 hover:opacity-80 cursor-pointer">
            <VN title="Tiếng Việt" className="w-6 h-4 rounded-sm" />
            <span>VN</span>
          </button>
          <span className="opacity-60">|</span>
          <button className="flex items-center gap-1.5 hover:opacity-80 cursor-pointer">
            <GB title="English" className="w-6 h-4 rounded-sm" />
            <span>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}
