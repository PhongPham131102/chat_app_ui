import CallSection from "@/components/layouts/call-section";
import ChatHeroSection from "@/components/layouts/chat-hero-section";
import Header from "@/components/layouts/header";
import MessageHeroSection from "@/components/layouts/message-hero-section";
import ChatSection from "@/components/layouts/chat-section";
import ChatContentSection from "@/components/layouts/chat-content-section";
import KeepContactSection from "@/components/layouts/keep-contact-section";
import ShowEmotion from "@/components/layouts/show-emotion";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-main justify-center  font-sans h-screen">
      <Header />
      <main className="flex flex-col w-full  mt-20  items-center justify-start">
        <ChatHeroSection />
        <MessageHeroSection />
        <CallSection />
        <ChatSection />
        <ChatContentSection />
        <KeepContactSection />
        <ShowEmotion />
      </main>
    </div>
  );
}
