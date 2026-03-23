"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function KeepContactSection() {
  return (
    <>
      <div className="  flex justify-center items-center gap-2 py-10 md:py-20 w-full max-w-[1180px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex  md:flex-row flex-col-reverse"
        >
          <div className=" flex flex-col gap-5 justify-center item-center w-full md:w-6/12">
            <p className="text-[30px] md:text-[50px]  px-15 leading-14 text-white text-start">
              Giữ liên lạc với nhóm
            </p>
            <p className="text-sm md:text-lg text-start max-w-[1080px] px-15 text-white">
              Cho dù là lập kế hoạch đi chơi cùng bạn bè hay chỉ đơn giản là
              chat với gia đình để cập nhật thông tin, bạn đều có thể thực hiện
              một cách dễ dàng qua cuộc trò chuyện nhóm.
            </p>
          </div>

          <div className=" flex justify-center relative w-2/3 md:w-5/12 md:py-0 py-5 mx-auto  px-10 ">
            <div className="absolute  top-1/5 flex justify-center w-full mx-auto px-10 pointer-events-none">
              <Image
                src="/keep-contact.webp"
                alt="chat-section"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto z-20"
              />
            </div>
            <Image
              src="/keep-contact-bg.webp"
              alt="chat-section"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto z-10"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
