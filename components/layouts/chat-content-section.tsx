"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ChatContentSection() {
  return (
    <div className="bg-[#121b21] w-full">
      <div className=" flex justify-center items-center gap-2 py-10 md:py-40  w-full max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex  md:flex-row flex-col"
        >
          <div className=" flex justify-center relative w-full md:w-6/12 mx-auto px-10">
            <Image
              src="/chat-content-heart.webp"
              alt="chat-section"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center item-center w-full md:w-6/12">
            <p className="text-[30px] md:text-[50px]  px-15 leading-14 text-white text-start">
              Trò chuyện <br className="hidden md:block" />{" "}
              <span className="text-green-500">thoả thích</span>
            </p>
            <p className="text-sm md:text-lg text-start max-w-[1080px] px-15 text-white">
              Với tính năng mã hóa đầu cuối trên WhatsApp, tin nhắn và cuộc gọi
              cá nhân của bạn được bảo mật bằng khóa bảo vệ. Chỉ bạn và người
              trò chuyện với bạn mới có thể đọc hoặc nghe nội dung tin nhắn,
              cuộc gọi. Không một ai khác, kể cả WhatsApp, làm được điều này
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
