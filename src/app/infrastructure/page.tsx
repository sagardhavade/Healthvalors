"use client";
// import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const Infrastructure = () => {
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
        pageName="Infrastructure"
        description="At Healthvalors Technologies, we understand the importance of robust infrastructure to support our software development and delivery processes. We design our state-of-the-art infrastructure to meet the highest standards of reliability, security, and scalability."
      />
      <section id="Infrastructure" className="lg:pt-22 pt-10 md:pt-12">
        <div className="container">
          <div
            className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"
            data-aos="fade-up"
          >
            <div className="flex w-full flex-col px-4 lg:flex-row">
              <SectionTitle
                title="We Believe in Progress"
                paragraph="Started with just 3 people in a single-room office, Healthvalors Technologies today has 50+ employees. With the increase in employees, the requirement for infrastructure increased, and we shifted to bigger premises for better infrastructure and facilities."
                paragraph1="The office area spans several thousand square feet. Healthvalors Technologies also has offices in Johannesburg for its business in the South African region. All the work places are as per business requirements."
                paragraph2="We certainly provide a comfortable and refreshing working environment for our employees, enabling them to create masterpieces as their output."
              />
              <div className="w-full px-4 lg:w-full" data-aos="fade-right">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <img
                    src="/images/infrastructure/15.png"
                    alt=""
                    // fill
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <img
                    src="/images/infrastructure/14.png"
                    alt="about image"
                    // fill
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center" data-aos="fade-up">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
                data-aos="fade-left"
              >
                <img
                  src="/images/infrastructure/17.png"
                  alt="about image"
                  // fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <img
                  src="/images/infrastructure/16.png"
                  alt="about image"
                  // fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-full">
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Security of Projects
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Every project at Healthvalors Technologies becomes a top
                    priority in terms of security. With continuous monitoring of
                    the projects and flawless project management techniques, we
                    control and manage the tasks assigned to each employee of
                    the company. The employees working for the company have
                    agreed and signed the Non-Disclosure Agreement, which
                    obligates them not to disclose technology or any information
                    related to projects, clients, etc. outside the company.
                    Every employee at Healthvalors Technologies follows the code
                    of ethics to protect privacy and works on assigned projects
                    with dedication.
                  </p>
                </div>

                <div className="mb-12 max-w-full lg:mb-0" data-wow-delay=".15s">
                  <div className="mx-[-12px] flex flex-wrap">
                    <h2 className="mb-4 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      Advantages of working with Healthvalors Technologies{" "}
                    </h2>
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Secured development environment (All projects on Visual Source Safe/SVN)." />
                      <List text="Electronic punch card system." />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="CCTV camera." />
                      <List text="Prohibition on pen drives, laptops, HDD etc." />
                      <List text="Every employee obeys the code of ethics." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Infrastructure" className="lg:pt-22 pt-10 md:pt-12">
        <div className="container">
          <div
            className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"
            data-aos="fade-up"
          >
            <div className="flex w-full flex-col px-4 lg:flex-row">
              <SectionTitle
                title="Working Environment"
                paragraph="We provide the best working environment to get the best output from every brain we hire. We provide all the necessary facilities to ensure employee satisfaction without compromising the quality of work. At Healthvalors Technologies, employees take pleasure in their work as they develop their professional skills and explore new technologies. This, in turn, results in employee retention, strengthening the company's productivity and expertise. Due to our dedicated, committed, efficient staff and state-of-the-art working environment, we are getting new clients and continuously getting repeat business from old clients."
                paragraph1=""
                paragraph2=""
              />
              <div className="w-full px-4 lg:w-full" data-aos="fade-right">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <img
                    src="/images/infrastructure/18.png"
                    alt=""
                    // fill
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <img
                    src="/images/infrastructure/19.png"
                    alt="about image"
                    // fill
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center" data-aos="fade-up">
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-right">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <img
                  src="/images/infrastructure/21.png"
                  alt="about image"
                  // fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <img
                  src="/images/infrastructure/20.png"
                  alt="about image"
                  // fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-full">
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Why employees are retained?
                  </h2>
                </div>

                <div className="mb-12 max-w-full lg:mb-0" data-wow-delay=".15s">
                  <div className="mx-[-12px] flex flex-wrap">
                    {/* <h2 className="mb-4 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      Advantages of working with Healthvalors Technologies{" "}
                    </h2> */}
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="High end development environment (All projects on Visual Source Safe/SVN)." />
                      <List text="Latest individual workstation." />
                      <List text="Freedom to suggest, give feedback or present ideas." />
                      <List text="Opportunity to work on various platforms/projects." />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Updated licensed software." />
                      <List text="Large conference room, meeting rooms with projector facilities." />
                      <List text="Elegant cabins for managers." />
                      <List text="Isolated server room." />
                      <List text="Refreshment facility." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Infrastructure" className="lg:pt-22 pt-10 md:pt-12">
        <div className="container">
          <div
            className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"
            data-aos="fade-up"
          >
            <div className="flex w-full flex-col px-4 lg:flex-row">
              <SectionTitle
                title="Customer Support and Correspondence"
                paragraph="The backbone of any online business, especially outsourcing, is online client support and access to track progress. Healthvalors Technologies focuses on providing dedicated client support through its online support tools to have a better end-product that is foolproof and fully customised according to the client's needs. With a world-class infrastructure and an adequate workforce, the company enjoys being a preferred choice for developing web and mobile apps among small, medium, and large industries across the world."
                paragraph1=""
                paragraph2=""
              />
              <div className="w-full px-4 lg:w-full" data-aos="fade-left">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <img
                    src="/images/infrastructure/23.png"
                    alt=""
                    // fill
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <img
                    src="/images/infrastructure/22.png"
                    alt="about image"
                    // fill
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center" data-aos="fade-up">
            <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <img
                  src="/images/infrastructure/24.png"
                  alt="about image"
                  // fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <img
                  src="/images/infrastructure/25.png"
                  alt="about image"
                  // fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-full">
                <div className="mb-9">
                  <h2 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
                    Salient Features
                  </h2>
                </div>

                <div className="mb-12 max-w-full lg:mb-0" data-wow-delay=".15s">
                  <div className="mx-[-12px] flex flex-wrap">
                    {/* <h2 className="mb-4 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                      Advantages of working with Healthvalors Technologies{" "}
                    </h2> */}
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="24/7 client support via phone." />
                      <List text="99.99% up-time with high speed internet connection." />
                      <List text="VoIP." />
                      <List text="Video conferencing." />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Instant Messengers." />
                      <List text="Direct access to the key individuals involved in the project." />
                      <List text="Sophisticated Project Management System (to enable constant andongoing updates during project development – involving all theaspects of the projects with key individuals)." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Infrastructure;
