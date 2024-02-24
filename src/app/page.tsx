import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Working from "@/components/Working";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <main className="main w-[100%] h-fit bg-black text-white px-5 py-5 overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Working />
      <Footer />
      <Copyright />
    </main>
  );
}
