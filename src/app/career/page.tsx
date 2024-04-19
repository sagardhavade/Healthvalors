import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Career from "@/components/Career/Career";
import Technologies from "@/components/Technologies/index";
export const metadata: Metadata = {
  title: "Career Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Career Page"
        description="Join Our Team and Shape the Future of Healthcare Technology. Explore Exciting Career Opportunities with Healthvalors Technologies Today!"
      />
      <Career />
      <Technologies />
      {/* <FAQ /> */}
    </>
  );
};

export default CareerPage;
