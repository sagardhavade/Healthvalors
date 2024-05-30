"use client";
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <>
      <section
        id="features"
        // className="py-16 md:py-20 lg:py-28"
        className="py-16 md:py-20 lg:py-10"
      >
        <div className="container">
          <SectionTitle
            title="Health Care Solutions"
            paragraph=""
            paragraph1=""
            paragraph2=""
            center
            mb="-70px"
          />
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              <h2 className="mb-4  text-4xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[36px]">
                Revolutionizing healthcare provision through digitally empowered
                service platforms.
              </h2>
              <div className="custom-underline"></div>

              <p className="mb-6 mr-4  text-base !leading-relaxed text-body-color md:text-lg">
                Digital service platforms are transforming healthcare by
                streamlining operations and enhancing patient care. These
                platforms utilize technologies like telemedicine and electronic
                health records to provide more efficient and accessible
                services, improving patient outcomes and satisfaction.
              </p>
              <p className="mr-4 mt-6 text-base  !leading-relaxed text-body-color md:text-lg">
                By enabling real-time data sharing and remote monitoring,
                digital platforms break down traditional barriers in healthcare.
                This ensures timely and effective care for patients,
                particularly in remote areas. As these technologies advance, the
                focus shifts towards preventive care, leading to better health
                outcomes and proactive patient management.
              </p>
            </div>
            <div
              className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
              data-aos="fade-up"
            >
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
          {/* <div className="grid grid-cols-2">
            <div>Column 1</div>
            <div>Column 2</div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
