import Navbar from "@/components/Navbar";
import Image from "next/image";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main className="bg-backgroundColor flex min-h-screen flex-col items-center justify-between pt-0">
      <Main />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
