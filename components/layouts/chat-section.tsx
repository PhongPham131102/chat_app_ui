"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ChatSection() {
  return (
    <>
      <div className=" flex justify-center items-center gap-2 py-10 md:py-40  w-full max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex  md:flex-row flex-col"
        >
          <div className=" flex justify-center relative w-full md:w-6/12 mx-auto">
            <Image
              src="/chat-frame.webp"
              alt="chat-section"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center item-center w-full md:w-6/12">
            <p className="text-[30px] md:text-[50px]  px-15 leading-14 text-white text-start">
              Chat và gọi điện trên màn hình lớn hơn
            </p>
            <p className="text-sm md:text-lg text-start max-w-[1080px] px-15 text-white">
              Xem tin nhắn, ảnh, video và tài liệu trên màn hình lớn hơn với
              WhatsApp dành cho Mac.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
