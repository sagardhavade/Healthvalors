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
        pageName="Medical College Software"
        description="This application is compatible with all standard browsers like Internet Explorer, Firefox, Google Chrome, Safari and Opera. It is also compatible with all modern operating systems like, Windows, Apple MAC OS, or Any of Linux based operating systems."
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
                    Software System For Schools And College Online M.C.Q Exam /
                    O.M.R Based Exam / Administration
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    This software is a network based web application prepared by
                    software firm Vrunda Computing useful for schools, colleges
                    as well as all educational establishments.
                    <br />
                    <br />
                    With this web application any educational body can fully
                    automate the process of management of a teaching institute.
                    It is deployed on your Computer Network ( LAN ) as web
                    application. Just one web server supplied by our company
                    needs to be connected to your LAN with network cable.
                    Thereafter all the computers connected to your LAN ( 25, 50,
                    500 or any number ) can be instantly used to run this
                    application.
                  </p>
                  <h6 className="mb-4  text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[18px]">
                    The most important feature of this application is Web Based
                    Online M.C.Q. type examination system and O.M.R. type
                    paper-sheet based examination system for conducting exams
                    automatically in large scale
                  </h6>
                </div>

                {/* <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      WHY RURAL HEALTHCARE?
                    </h2>
                    <div className="xl:w-fulll w-full px-3 sm:w-1/2 lg:w-full">
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
                    </div>
                  </div>
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
                <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    {/* <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      WHY RURAL HEALTHCARE?
                    </h2> */}
                    <div className="xl:w-fulll w-full px-3 text-left sm:w-1/2 lg:w-full">
                      <List
                        text="
Web based user Interface
"
                      />
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        The user interface of this software is like a web site,
                        and it does not require any special client software on
                        user&#39;s computer. The regular web browsers normally
                        available on all computers like Internet Explorer or
                        Firefox can be used to run this application. <br /> This
                        application is compatible with all standard browsers
                        like Internet Explorer, Firefox, Google Chrome, Safari
                        and Opera. It is also compatible with all modern
                        operating systems like, Windows, Apple MAC OS, or Any of
                        Linux based operating systems. <br /> The distinct
                        advantage of web based application over commonly
                        available desktop application is security, centralized
                        storage of data and ease of maintenance. The data is is
                        maintained on one dedicated server which can be accessed
                        from anywhere on LAN. Therefore it is secure and easy to
                        maintain and backup.
                      </p>
                      <List text="Multilingual Support" />
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        The user Interface of this application supports multiple
                        Indian languages. Currently this software is available
                        in English, Hindi, Gujarati and Marathi versions. The
                        support for other Indian languages will be added soon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  {/* <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Software System For Schools And College Online M.C.Q Exam /
                    O.M.R Based Exam / Administration
                  </h2> */}
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      THE KEY APPLICATION FEATURES
                    </h2>
                    <List text="ONLINE EXAMINATION – WEB BASED" />
                    <List text="OMR BASED M.C.Q. EXAMINATION – PAPER BASED" />
                    <List text="AUTOMATIC ROLL CALL ( ATTENDANCE ) RECORDS" />
                    <List text="AUTOMATIC MARKSHEET MANAGEMENT - FOR WRITTEN EXAM" />
                    <List text="TIME TABLE MANAGEMENT" />
                    <List text="STUDENT&#39;S PROFILE AND PROGRESS NOTES" />
                    <List text="AUTO-UPGRADATION OF PASSING STUDENTS" />
                    <List text="BASIC ACCOUNING RELATED TO FEES COLLECTION." />
                    <List text="ABILITY TO SEND MASS SMS AND MASS EMAIL ALERTS" />
                  </p>
                </div>

                {/* <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      WHY RURAL HEALTHCARE?
                    </h2>
                    <div className="xl:w-fulll w-full px-3 sm:w-1/2 lg:w-full">
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
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RuralHealth;
