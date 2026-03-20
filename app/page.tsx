import Header from "@/components/layouts/header";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans h-screen w-screen">
      <Header />
      <main>
        <h1>Chat App</h1>
      </main>
    </div>
  );
}
