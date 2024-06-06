"use client";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const Telemedicine = () => {
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
        pageName="Telemedicine Solution"
        description="Transforming Healthcare Delivery with Telemedicine. Connect Patients and Providers Virtually Anywhere, Anytime with Healthvalors Technologies Telemedicine Solutions."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center" data-aos="fade-up">
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-right">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/telemedicine/29.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/telemedicine/28.png"
                  alt="about image"
                  fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    What Is Telemedicine ?
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <b>Telemedicine (mostly known as telehealth or telecare)</b>{" "}
                    brings health care access to rural locations by enabling
                    practitioners to evaluate, diagnose, and treat patients
                    remotely using the latest telecommunications technology.
                    Telemedicine allows patients to receive expert medical care
                    without having to travel.
                    <br />
                    Many patients find it difficult to travel to clinics,
                    hospitals, or doctor&apos;s offices for any number of
                    reasons. Telemedicine can be a great option for patients
                    with unique challenges or in situations where it is
                    difficult to travel to receive traditional care.
                  </p>
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    What are the Benefits of Telemedicine ?
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <b> Improved Access </b>– Over 40 years have seen the use of
                    telemedicine to provide healthcare services to patients in
                    remote locations. Not only does telemedicine improve access
                    to patients, but it also allows physicians and health
                    facilities to expand their reach beyond their own offices.
                    Given the provider shortages throughout the world—in both
                    rural and urban areas—telemedicine has a unique capacity to
                    increase service to millions of new patients.
                    <br />
                    <b>Cost Efficiencies</b> – : Reducing or containing
                    healthcare costs is one of the most important reasons for
                    funding and adopting telehealth technologies. Research
                    demonstrates that telemedicine can lower healthcare costs
                    and boost efficiency by improving chronic disease
                    management, sharing health professional staffing, reducing
                    travel times, and reducing or shortening hospital stays.
                    <br />
                    <b>Improved Quality</b> – Studies have consistently shown
                    that the quality of healthcare services delivered via
                    telemedicine is as good as those given in traditional
                    in-person consultations.
                    <br />
                    <b> Patient Demand </b>– Consumers want telemedicine. The
                    greatest impact of telemedicine is on the patient, their
                    family, and their community. Using telemedicine technologies
                    reduces the patient&apos;s travel time and associated
                    stress.
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

export default Telemedicine;
