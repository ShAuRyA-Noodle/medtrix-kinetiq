import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Technology } from "@/components/sections/technology";
import { Product } from "@/components/sections/product";
import { Proof } from "@/components/sections/proof";
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
        <SectionPlaceholder
          id="founder"
          eyebrow="Founder"
          title="Dr. Akshpreet Kaur."
          description="PhD, UIET Panjab University. Visvesvaraya Postdoctoral Fellow, DST Government of India. Author across 9 SCIE-indexed publications on triboelectric nanogenerators for biomedical applications."
        />
        <SectionPlaceholder
          id="press"
          eyebrow="Press and recognitions"
          title="First Prize from the Government of India. Platforms at Oxford and Cambridge."
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
