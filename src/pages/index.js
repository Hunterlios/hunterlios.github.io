import { Hero, About, Navbar } from "../components";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
