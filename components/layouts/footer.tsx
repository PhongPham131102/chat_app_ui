"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
  {
    title: "Nền tảng",
    links: [
      { label: "Android", href: "#" },
      { label: "iPhone", href: "#" },
      { label: "Mac/Windows", href: "#" },
      { label: "WhatsApp Web", href: "#" },
    ],
  },
  {
    title: "Chúng tôi là ai",
    links: [
      { label: "Giới thiệu", href: "#" },
      { label: "Nghề nghiệp", href: "#" },
      { label: "Trung tâm thương hiệu", href: "#" },
      { label: "Quyền riêng tư", href: "#" },
    ],
  },
  {
    title: "Sử dụng WhatsApp",
    links: [
      { label: "Android", href: "#" },
      { label: "iPhone", href: "#" },
      { label: "Mac/Windows", href: "#" },
      { label: "WhatsApp Web", href: "#" },
    ],
  },
  {
    title: "Bạn cần trợ giúp?",
    links: [
      { label: "Liên hệ", href: "#" },
      { label: "Trung tâm trợ giúp", href: "#" },
      { label: "Bảo mật", href: "#" },
      { label: "Cố vấn an toàn", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#111b21] text-white py-20 px-10">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
          <Image
            src="/what-app.svg"
            alt="What App Logo"
            width={130}
            height={40}
            className="brightness-0 invert"
          />
          <p className="text-gray-400 text-sm max-w-[200px]">
            Kết nối thế giới một cách riêng tư bằng tin nhắn và cuộc gọi đơn giản, tin cậy.
          </p>
          <div className="flex gap-4 text-2xl text-gray-400">
            <Link href="#" className="hover:text-whatsapp transition-colors">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-whatsapp transition-colors">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-whatsapp transition-colors">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-whatsapp transition-colors">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="flex flex-col gap-5">
            <h4 className="font-semibold text-gray-200 uppercase text-[10px] tracking-widest">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-[1180px] mx-auto mt-20 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-gray-500">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>2026 © WhatsApp LLC</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Điều khoản dịch vụ
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cài đặt cookie
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-gray-700 rounded-full px-5 py-2 hover:border-gray-500 transition-colors cursor-pointer">
          <span className="text-gray-300">Tiếng Việt</span>
        </div>
      </div>
    </footer>
  );
}
