"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { LiaDownloadSolid } from "react-icons/lia";
export default function ChatHeroSection() {
  return (
    <div className="px-15 w-full  md:h-[73vh] h-[50vh] py-5 ">
      <div className="w-full h-full relative ">
        <Image
          src="/bg-main-mother-child.webp"
          alt="bg-main-mother-child"
          loading="eager"
          fill
          sizes="100vw"
          className="object-cover object-top rounded-md "
        />
        <div className="absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center ">
          <div className="container max-w-[1080px] h-full flex">
            <div className="h-full flex flex-col justify-start items-start gap-5  lg:w-1/3 w-full py-20 xl:pl-10 px-7">
              <h1 className="text-[50px] md:text-[70px] font-medium md:font-bold leading-18 text-white ">
                Nhắn tin riêng tư
              </h1>
              <p className="text-md md:text-lg text-white">
                Nhắn tin và gọi điện miễn phí*, đơn giản, riêng tư, đáng tin cậy
                trên toàn thế giới.
              </p>
              <button className="mt-3 md:mt-10 min-h-10 overflow-hidden bg-green-400 border border-transparent  hover:border-white transition-border  duration-2000 text-white z-10 px-10 py-3 rounded-full flex items-center gap-2 cursor-pointer group relative">
                <p className="text-white z-20">Tải xuống</p>
                <LiaDownloadSolid className="text-white z-20" />
                <div className="bg-black z-10 absolute top-100 -translate-x-1/2 left-1/2 -translate-y-1/2 w-50 h-50 rounded-full group-hover:top-0 ease-[cubic-bezier(0.25,-0.21,0.00,1.07)] transition-all duration-2000"></div>
              </button>
            </div>
            <div className="lg:flex hidden w-2/3 h-full relative flex-col justify-end items-end">
              <div className="relative w-[70%] h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full relative top-20 left-0 h-11"
                >
                  <Image
                    src="/good-morning.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="bg-main-mother-child"
                    className="object-contain object-top z-10"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-full relative top-14 left-0! h-11 z-10"
                >
                  <Image
                    src="/heart.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="bg-main-mother-child"
                    className="object-contain object-top z-10"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full relative top-18 left-0 h-22"
                >
                  <Image
                    src="/coffe.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="bg-main-mother-child"
                    className="object-contain object-top z-10"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-full relative top-18 left-0 h-13"
                >
                  <Image
                    src="/wait-trip.webp"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="bg-main-mother-child"
                    className="object-contain object-top z-10"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
