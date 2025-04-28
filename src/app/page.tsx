import AboutSection from "@/components/About";
import ContactSection from "@/components/Contacts";
import EducationSection from "@/components/Education";
import FooterSect from "@/components/Footer";
import HistorySection from "@/components/History";
import HomeSection from "@/components/Home";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <HistorySection />
      <ProjectSection />
      <ContactSection />
      <FooterSect />
    </main>
  );
}
