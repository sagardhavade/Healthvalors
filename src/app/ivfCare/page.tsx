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
        pageName="IVF Care"
        description="Effective patient management in an IVF clinic requires a comprehensive and integrated system to ensure seamless operations and enhanced patient care. Here is a detailed breakdown of essential features and functionalities for an IVF clinic management system."
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
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Patient Management
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Patient Registration" />
                    <strong>Easy Onboarding:</strong> User-friendly interface
                    for registering new patients. <br />
                    <strong>Comprehensive Forms: </strong>Collection of detailed
                    patient information including medical history, personal
                    details, and consent forms.
                    <br />
                    <List text="Patient Portal" />
                    <strong>Secure Access:</strong> Patients can securely log in
                    to view their medical records, treatment plans, appointment
                    schedules, and test results.
                    <br />
                    <strong>Communication:</strong>Secure messaging with
                    healthcare providers for queries and updates.
                    <br />
                    <List text="Electronic Medical Records (EMR)" />
                    <strong>Detailed Medical History:</strong>Comprehensive
                    records of all patient interactions, treatments, and
                    outcomes.
                    <br />
                    <strong>Integration:</strong>Seamless integration with other
                    hospital systems and laboratories for real-time data
                    sharing.
                    <br />
                    <List text="Consent Management" />
                    <strong>Digital Forms: </strong>Easy-to-fill digital consent
                    forms.
                    <br />
                    <strong>Secure Storage:</strong>Safe and easy retrieval of
                    consent documents.
                  </p>
                </div>

                {/* <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      <List text="Appointment Scheduling" />
                      <List text="Treatment Cycle Management" />
                      <List text="Laboratory Management" />
                      <List text="Financial Management" />
                      <List text="Data Analysis and Reporting" />
                      <List text="Communication and Collaboration" />
                      <List text="Security and Compliance" />
                      <List text="Integration Capabilities" />
                      <List text="User-Friendly Interface" />
                      <List text="Training and Support" />
                     </h2> */}
                {/* <div className="xl:w-fulll w-full px-3 sm:w-1/2 lg:w-full">
                      <List
                        text="
People in rural areas generally have less access to healthcare than their urban counterparts.
"
                      />
                      <List text="700 million people living in 636k villages." />
                      <List text="66% of rural Indians don’t have access to critical medicine." />
                      <List text="31% of the population travel more than 30 kms seeking health care in rural India." />
                      <List text="Not attractive enough for Private sector." />
                      <List text="Distributed population." />
                      <List text="Not enough money?" />
                      <List text="Less efficient public sector." />
                      <List text="Incentives missing." />
                      <List text="Lack of skilled health workers on ground." />
                      <List text="Missing efficient distribution networks." />
                    </div> */}
                {/* 
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Focus on Core Competencies." />
                      <List text="We value good working relationships." />
                      <List text="We work to your time frames." />
                      <List text="Focus on Core Competencies." />
                      <List text="A time tested development process." />
                      <List text="Deliver projects on time." />
                    </div> */}
                {/* </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap items-center" data-aos="fade-up">
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Appointment Scheduling
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Calendar Management" />
                    <List text="Automated Reminders" />
                  </p>
                </div>
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Laboratory Management
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Sample Tracking" />
                    <List text="Cryopreservation Management" />
                  </p>
                </div>
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Financial Management
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Billing and Invoicing" />
                    <List text="Payment Tracking" />
                  </p>
                </div>
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Data Analysis and Reporting
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Outcome Tracking" />
                    <List text="Regulatory Reporting" />
                    <List text="Custom Reports" />
                  </p>
                </div>
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Communication and Collaboration
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Internal Messaging" />
                    <List text=" Patient Communication" />
                    <List text="Document Sharing" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h2 className="text-full  mb-4 text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Treatment Cycle Management
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Cycle Tracking" />
                    <List text=" Medication Management" />
                  </p>
                </div>
                <div className="mb-9">
                  <h2 className="text-full  mb-4 text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Security and Compliance
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Data Encryption" />
                    <List text="Access Control" />
                    <List text="Audit Trails" />
                  </p>
                </div>
                <div className="mb-9">
                  <h2 className="text-full  mb-4 text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Integration Capabilities
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="EMR/EHR Integration" />
                    <List text="Laboratory Equipment Integration" />
                    <List text="Third-Party Software Integration" />
                  </p>
                </div>
                <div className="mb-9">
                  <h2 className="text-full  mb-4 text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    User-Friendly Interface
                  </h2>
                  <p className="text-left text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <List text="Dashboard" />
                    <List text="Mobile Access" />
                    <List text="Customizable Views" />
                  </p>
                </div>

                <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  {/* <div className="mx-[-12px] flex flex-wrap">
                    <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      <List text="Appointment Scheduling" />
                      <List text="Treatment Cycle Management" />
                      <List text="Laboratory Management" />
                      <List text="Financial Management" />
                      <List text="Data Analysis and Reporting" />
                      <List text="Communication and Collaboration" />
                      <List text="Security and Compliance" />
                      <List text="Integration Capabilities" />
                      <List text="User-Friendly Interface" />
                      <List text="Training and Support" />
                                         </h2>
                  </div> */}
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
