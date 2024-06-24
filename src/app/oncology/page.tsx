"use client";
// import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const RuralHealth = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <>
      <Breadcrumb
        pageName="Oncology"
        description="Oncology management software refers to specialized software solutions designed to assist healthcare providers, particularly oncologists and oncology departments, in managing the treatment and care of cancer patients. Here are some key features and functionalities commonly found in oncology management software"
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center" data-aos="fade-up">
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <img
                  src="/images/ruralHealth/30.png"
                  alt="about image"
                  // fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <img
                  src="/images/ruralHealth/31.png"
                  alt="about image"
                  // fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  {/* <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Patient Management
                  </h2> */}
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      THE KEY APPLICATION FEATURES
                    </h2>
                    <List text="Patient Management" />
                    Allows for comprehensive patient records management
                    including demographics, medical history, treatment plans,
                    and progress notes.
                    <List text="Treatment Planning" />
                    Assists oncologists in creating and managing treatment
                    plans, including chemotherapy regimens, radiation therapy
                    schedules, and surgical interventions.
                    <List text="Clinical Decision Support" />
                    Provides decision support tools based on evidence-based
                    guidelines and protocols to assist oncologists in making
                    informed treatment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap items-center" data-aos="fade-up">
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    {/* <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      WHY RURAL HEALTHCARE?
                    </h2> */}
                    <div className="xl:w-fulll w-full px-3 text-left sm:w-1/2 lg:w-full">
                      {/* <List
                        text="
Web based user Interface
"
                      /> */}
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        <List text="Electronic Health Records (EHR)" />
                        Integrates with electronic health records systems to
                        ensure seamless sharing of patient information across
                        healthcare providers and departments.
                        <List text="Chemotherapy Management" />
                        Helps in managing chemotherapy orders, dosing
                        calculations, scheduling, and monitoring of adverse
                        effects.
                        <List text="Radiation Oncology Integration" />{" "}
                        Interfaces with radiation oncology systems to coordinate
                        treatment plans and monitor radiation therapy sessions.
                        <List text="Pathology and Imaging Integration" />
                        Facilitates integration with pathology and imaging
                        systems to access diagnostic reports and images.
                        <List text="Clinical Trials Management" />
                        Supports management of patient enrollment, protocol
                        adherence, and data collection for clinical trials
                        related to oncology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Billing and Coding" />
                    Includes features for oncology-specific billing and coding
                    to streamline reimbursement processes and ensure compliance
                    with regulations.
                    <List text="Outcome Tracking and Reporting" />
                    Enables tracking of treatment outcomes, disease progression,
                    and survival rates, and generates reports for quality
                    improvement initiatives and regulatory requirements.
                    <List text="Telemedicine Capabilities" />
                    Supports telemedicine consultations and follow-ups, allowing
                    oncologists to provide remote care to patients.
                    <List text="Patient Portal" />
                    Provides a secure portal for patients to access their
                    medical records, treatment plans, and communicate with their
                    healthcare providers.
                    <List text="Compliance and Regulatory Support" />
                    Helps oncology practices adhere to HIPAA regulations and
                    other healthcare standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RuralHealth;
