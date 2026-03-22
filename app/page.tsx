import ChatHeroSection from "@/components/layouts/chat-hero-section";
import Header from "@/components/layouts/header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-main justify-center  font-sans h-screen w-screen">
      <Header />
      <main className="flex flex-col w-full h-[200vh] mt-20  items-center justify-start">
        <ChatHeroSection />
      </main>
    </div>
  );
}
