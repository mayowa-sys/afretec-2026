import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { CallBand } from "@/components/callband/CallBand";
import { Timeline } from "@/components/timeline/Timeline";
import { Eligibility } from "@/components/eligibility/Eligibility";
import { Prizes } from "@/components/prizes/Prizes";
import { PastEditions } from "@/components/past/PastEditions";
import { Team } from "@/components/team/Team";
import { FAQ } from "@/components/faq/FAQ";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <CallBand />
      <Timeline />
      <Eligibility />
      <Prizes />
      <PastEditions />
      <Team />
      <FAQ />
      <Footer />
    </main>
  );
}
