import Header from "@/components/layouts/header";
import Image from "next/image";
import { LiaDownloadSolid } from "react-icons/lia";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-main justify-center  font-sans h-screen w-screen">
      <Header />
      <main className="flex flex-col w-full h-[200vh] mt-20  items-center justify-start">
        <div className="px-15 w-full h-[73vh] py-5 ">
          <div className="w-full h-full relative ">
            <Image
              src="/bg-main-mother-child.webp"
              alt="bg-main-mother-child"
              loading="eager"
              fill
              className="object-cover object-top rounded-md "
            />
            <div className="absolute top-0 left-0 right-0 bottom-0  flex justify-center items-center ">
              <div className="container max-w-[1080px] h-full flex">
                <div className="h-full flex flex-col justify-start items-start gap-5 w-1/3 py-20">
                  <h1 className="text-[70px] font-bold leading-18 text-white ">
                    Nhắn tin riêng tư
                  </h1>
                  <p className="text-lg text-white">
                    Nhắn tin và gọi điện miễn phí*, đơn giản, riêng tư, đáng tin
                    cậy trên toàn thế giới.
                  </p>
                  <button className="mt-10 overflow-hidden bg-green-400 border border-transparent  hover:border-white transition-border  duration-2000 text-white z-10 px-10 py-3 rounded-full flex items-center gap-2 cursor-pointer group relative">
                    <p className="text-white z-20">Tải xuống</p>
                    <LiaDownloadSolid className="text-white z-20" />
                    <div className="bg-black z-10 absolute top-100 -translate-x-1/2 left-1/2 -translate-y-1/2 w-50 h-50 rounded-full group-hover:top-0 ease-[cubic-bezier(0.25,-0.21,0.00,1.07)] transition-all duration-2000"></div>
                  </button>
                </div>
                <div className="w-2/3 h-full flex flex-col justify-end items-end">
                  <div className="relative w-[70%] h-full">
                    <div className="w-full relative top-20 left-0 h-11">
                      <Image
                        src="/good-morning.webp"
                        fill
                        alt="bg-main-mother-child"
                        className="object-contain object-top z-10"
                      />
                    </div>
                    <div className="w-full relative top-14 left-0 h-11">
                      <Image
                        src="/heart.webp"
                        fill
                        alt="bg-main-mother-child"
                        className="object-contain object-top z-10"
                      />
                    </div>
                    <div className="w-full relative top-18 left-0 h-22">
                      <Image
                        src="/coffe.webp"
                        fill
                        alt="bg-main-mother-child"
                        className="object-contain object-top z-10"
                      />
                    </div>
                    <div className="w-full relative top-18 left-0 h-13">
                      <Image
                        src="/wait-trip.webp"
                        fill
                        alt="bg-main-mother-child"
                        className="object-contain object-top z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
