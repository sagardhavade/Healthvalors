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
        pageName="Dailyasis "
        description="Dailyasis management in healthcare involves the day-to-day operational oversight of a medical facility or practice. It includes tasks such as staff scheduling, patient flow management, inventory control, financial transactions, compliance with regulations, and ensuring efficient communication among healthcare teams. Effective daily management ensures smooth operations, optimal patient care, and adherence to quality standards."
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
                    <List text="Staff Scheduling and Management" />
                    Ensuring adequate staffing levels, scheduling shifts,
                    managing time-off requests, and handling staff assignments
                    based on patient needs.
                    <List text="Patient Flow and Appointment Scheduling" />
                    Optimizing patient scheduling to minimize wait times,
                    maximize efficiency, and ensure timely care delivery.
                    <List text="Inventory and Supplies Management" />
                    Monitoring and replenishing medical supplies, medications,
                    and equipment necessary for daily operations.
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
                        <List text="Patient Admission and Discharge Processes" />
                        Integrates with electronic health records systems to
                        ensure seamless sharing of patient information across
                        healthcare providers and departments.
                        <List text="Facility Maintenance and Safety" />
                        Overseeing the maintenance of facilities, ensuring
                        cleanliness, safety, and compliance with regulations and
                        standards.
                        <List text="Financial Management" />
                        Handling daily financial transactions, billing
                        processes, insurance claims, and ensuring accurate
                        documentation for reimbursement.
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
                    <List text="Quality Assurance and Compliance" />
                    Monitoring adherence to quality standards, policies, and
                    regulations to ensure patient safety and satisfaction.
                    <List text="Communication and Coordination" />
                    Facilitating communication among healthcare teams,
                    departments, and external stakeholders to ensure effective
                    care coordination.
                    <List text="Data Management and Reporting" />
                    Managing patient records, operational data, and generating
                    reports to track performance metrics, outcomes, and
                    compliance.
                    <List text="Emergency Preparedness" />
                    Developing and implementing protocols for handling
                    emergencies and ensuring staff readiness to respond
                    effectively.
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
