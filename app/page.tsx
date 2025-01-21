import Hero from "./components/Hero";
import Grid from "./components/Grid";

// // import { FaHome } from "react-icons/fa";
// import { FloatingNav } from "./components/ui/FloatingNav";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-2-7xl w-full">
        {/* <FloatingNav/> */}
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
