import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { TiHome } from "react-icons/ti";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav className='' navItems={[{name: 'Home', link: "/", icon: <TiHome />}]}/>
        <Hero />
        <Grid/>
      </div>
    </main>
      );
}
