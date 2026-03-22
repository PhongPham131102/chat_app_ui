"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CallSection() {
  return (
    <>
      <div className=" flex justify-center items-center gap-2 py-40  w-full max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex"
        >
          <div className="flex flex-col gap-5 justify-center item-center w-1/2">
            <p className="text-[30px] md:text-[50px]  px-15 leading-14 text-white text-start">
              Không bỏ lỡ khoảnh khắc nào nhờ cuộc gọi thoại và video
            </p>
            <p className="text-sm md:text-lg text-start max-w-[1080px] px-15 text-white">
              Từ cuộc gọi nhóm với bạn học đến cuộc gọi nhanh cho mẹ, hãy tận
              hưởng trải nghiệm gọi thoại và video như đang trò chuyện trực
              tiếp.
            </p>
          </div>
          <div className=" flex justify-center relative w-1/2 mx-auto">
            <Image
              src="/call-frame.webp"
              alt="call-section"
              width={0}
              height={0}
              sizes="100vw"
              className="w-3/5 h-auto"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
