import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Career from "@/components/Career/Career";
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
        description="Transforming Healthcare Delivery With Innovative Solutions"
      />
      <Career />
      {/* <FAQ /> */}
    </>
  );
};

export default CareerPage;
