"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function ShowEmotion() {
  return (
    <>
      <div className=" flex justify-center items-center gap-2 py-10 md:py-40 h-full  w-full max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex  md:flex-row flex-col"
        >
          <div className=" flex justify-center relative w-full md:w-1/2 mx-auto">
            <Image
              src="/show-emotion.webp"
              alt="call-section"
              width={0}
              height={0}
              sizes="100vw"
              className="w-3/5 h-auto"
            />
          </div>
          <div className="flex flex-col gap-5 justify-center item-center w-full md:w-6/12">
            <p className="text-[30px] md:text-[50px]  px-15 leading-14 text-white text-start">
              Thể hiện cảm xúc
            </p>
            <p className="text-sm md:text-lg text-start max-w-[1080px] px-15 text-white">
              Thể hiện bản thân không qua lời nói. Dùng nhãn dán, ảnh GIF hoặc
              chia sẻ khoảnh khắc hằng ngày khi đăng Trạng thái. Ngoài ra, bạn
              có thể ghi âm tin nhắn thoại để nhanh chóng gửi lời chào hoặc kể
              câu chuyện dài hơn.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
