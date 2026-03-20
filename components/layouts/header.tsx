import Image from "next/image";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="w-full h-16 bg-main text-white flex items-center justify-between px-10 fixed top-0 left-0 right-0">
      <div className="flex items-center gap-4">
        <Image
          src="/what-app.svg"
          alt="What App Logo"
          width={130}
          height={40}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button>Đăng nhập</Button>
      </div>
    </header>
  );
}
