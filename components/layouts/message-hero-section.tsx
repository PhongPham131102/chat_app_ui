"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MessageHeroSection() {
  return (
    <div className="w-full py-3 flex flex-col gap-5 justify-center items-center h-100vh overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-[80%] h-[230px] mx-auto"
      >
        <Image
          src="/top-message.webp"
          alt="bg-main-mother-child"
          fill
          className="object-contain object-bottom"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[30px] md:text-[47px] text-center max-w-[1080px] px-15 leading-14 text-white"
      >
        Với khả năng nhắn tin và gọi điện riêng tư, bạn có thể là chính mình,
        thỏa sức trò chuyện và gắn kết với những người quan trọng nhất bất kể họ
        đang ở đâu.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-[80%] h-[230px] mx-auto"
      >
        <Image
          src="/bottom-message.webp"
          alt="bg-main-mother-child"
          fill
          className="object-contain object-bottom"
        />
      </motion.div>
    </div>
  );
}
