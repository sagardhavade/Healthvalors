import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

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
        pageName="Contact"
        description="Please fill the inquiry form and we will contact you shortly. Please write in detail about your requirements & query. It will help us assist you quickly and efficiently."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
