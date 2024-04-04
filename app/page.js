import Navbar from "@/components/Navbar";
import Image from "next/image";
import Main from "@/components/Main";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-backgroundColor flex min-h-screen flex-col items-center justify-between p-24 pt-0">
      <Navbar/>
      <Main />
      <Projects />
    </main>
  );
}
