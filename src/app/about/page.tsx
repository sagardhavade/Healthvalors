import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQ from "@/components/Faq";
import Team from "@/components/About/Team";
import TechnicalSkill from "@/components/About/TechnicalSkill";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Transforming Healthcare Delivery With Innovative Solutions"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Team />
      <TechnicalSkill />
      <Brands title="Testomonial" />
      {/* <FAQ /> */}
    </>
  );
};

export default AboutPage;
