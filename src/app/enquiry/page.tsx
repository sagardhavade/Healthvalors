import Breadcrumb from "@/components/Common/Breadcrumb";
import Enquiry from "@/components/Enquiry";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Enquiry"
        description="Please fill the inquiry form and we will contact you shortly. Please write in detail about your requirements & query. It will help us assist you quickly and efficiently."
      />

      <Enquiry />
    </>
  );
};

export default ContactPage;
