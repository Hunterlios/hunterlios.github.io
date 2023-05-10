import { Hero, About, Navbar, Help, Contact } from "../components";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <About />
      <Help />
      <Contact />
    </div>
  );
}
