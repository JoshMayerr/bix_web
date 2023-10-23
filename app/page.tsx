import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-serif tracking-tighter">
      <div>
        <div>welcome to bix.sh</div>
        <div>the open-source "Common App" for tech internship applications</div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
