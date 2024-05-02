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

          <div
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4"
            data-aos="fade-up"
          >
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
