import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Technology } from "@/components/sections/technology";
import { Product } from "@/components/sections/product";
import { Proof } from "@/components/sections/proof";
import { Clinical } from "@/components/sections/clinical";
import { Publications } from "@/components/sections/publications";
import { Recognitions } from "@/components/sections/recognitions";
import { Market } from "@/components/sections/market";
import { Founder } from "@/components/sections/founder";
import { Roadmap } from "@/components/sections/roadmap";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { FooterMini } from "@/components/sections/footer-mini";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Technology />
        <Product />
        <Proof />
        <Clinical />
        <Publications />
        <Recognitions />
        <Market />
        <Founder />
        <Roadmap />
        <Faq />
        <Contact />
      </main>
      <FooterMini />
    </>
  );
}
