import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { SectionPlaceholder } from "@/components/sections/section-placeholder";
import { FooterMini } from "@/components/sections/footer-mini";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <SectionPlaceholder
          id="problem"
          eyebrow="The problem"
          title="Rehab data should never depend on a charger."
          description="Most rehab patients are still measured by a clipboard. Wearables die in days. Implants need surgery to swap a battery. The body is already producing the energy. We just had to learn how to harvest it."
        />
        <SectionPlaceholder
          id="technology"
          eyebrow="Technology"
          title="Triboelectric nanogenerators built on MWCNT-PDMS at 4 wt%."
          description="Multiwalled carbon nanotubes dispersed at 4 wt% in a PDMS matrix. The material was selected experimentally as the optimum across electrical output and mechanical compliance."
        />
        <SectionPlaceholder
          id="product"
          eyebrow="Product"
          title="The Rehab Glove."
          description="Five smart wearable triboelectric nanogenerators on the dorsum of a fabric glove. Each unit detects bend angle and grip strength in real time, with no battery and no wires."
        />
        <SectionPlaceholder
          id="proof"
          eyebrow="Proof"
          title="Numbers we publish, sourced verbatim."
          description="Every figure on this page is taken directly from peer-reviewed publications. Hover any number to see its source."
        />
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
