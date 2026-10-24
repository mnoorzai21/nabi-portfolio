import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero
        name="Mohammad Nabi Noorzai"
        role="Software Engineer"
        summary="I build responsive, full-stack web applications with React, Next.js, and TypeScript. I'm currently building FinTech tools for active traders, including a real-time stock scanner and trading journal."
      />
      <About/>
    </main>
  );
}