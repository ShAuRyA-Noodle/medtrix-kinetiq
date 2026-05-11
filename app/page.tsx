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
import { SectionPlaceholder } from "@/components/sections/section-placeholder";
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
        <SectionPlaceholder
          id="founder"
          eyebrow="Founder"
          title="Dr. Akshpreet Kaur."
          description="PhD, UIET Panjab University. Visvesvaraya Postdoctoral Fellow, DST Government of India. Author across 9 SCIE-indexed publications on triboelectric nanogenerators for biomedical applications."
        />
        <SectionPlaceholder
          id="contact"
          eyebrow="Contact"
          title="Pilot, partner, or invest."
          description="Three doors. One inbox. Use the form that matches your intent."
        />
      </main>
      <FooterMini />
    </>
  );
}
