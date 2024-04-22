"use client";

import SectionTitle from "../Common/SectionTitle";
import PricingBox from "../Technologies/Technologies";
import OfferList from "../Pricing/OfferList";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tech = () => {
  const isMonthly = "";

  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <section
      id="tech"
      className="relative z-10 py-16 md:py-20 lg:py-28"
      data-aos="fade-up"
    >
      <div className="container">
        <SectionTitle
          title="TECHNOLOGIES"
          paragraph=""
          paragraph1=""
          paragraph2=""
          center
          width="665px"
          mb="0px"
        ></SectionTitle>
        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
        >
          <PricingBox
            icon={
              <svg
                viewBox="0 0 640 512"
                fill="currentColor"
                height="40"
                width="40"
              >
                <path d="M48 48h88c13.3 0 24-10.7 24-24S149.3 0 136 0H32C14.3 0 0 14.3 0 32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V48zm127.8 176c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-26.5 32c-29.4 0-53.3 23.9-53.3 53.3 0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6-7.5-4.1-16.2-6.4-25.3-6.4h-69.4zm368 80c14.7 0 26.7-11.9 26.7-26.7 0-29.5-23.9-53.3-53.3-53.3h-69.4c-9.2 0-17.8 2.3-25.3 6.4 32.4 11.9 57.2 39.5 65.2 73.6h56.1zm-89.4 0c-8.6-24.3-29.9-42.6-55.9-47-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1-26 4.4-47.3 22.7-55.9 47-2.7 7.5-4.1 15.6-4.1 24 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-8.4-1.4-16.5-4.1-24zM464 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-80-32c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zM504 48h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V32c0-17.7-14.3-32-32-32H504c-13.3 0-24 10.7-24 24s10.7 24 24 24zM48 464v-88c0-13.3-10.7-24-24-24S0 362.7 0 376v104c0 17.7 14.3 32 32 32h104c13.3 0 24-10.7 24-24s-10.7-24-24-24H48zm456 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c17.7 0 32-14.3 32-32V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v88h-88z" />
              </svg>
            }
            btntitle="Client Side Technologies"
          >
            <OfferList
              text="Microsoft Visual Studio – Is an integrated development"
              status="active"
            />
            <OfferList
              text="environment (IDE) from Microsoft"
              status="active"
            />
          </PricingBox>
          <PricingBox
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="40"
                width="40"
              >
                <path d="M16.5 12c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2 0 .37-.03.73-.08 1.08.69.1 1.33.32 1.92.64.1-.56.16-1.13.16-1.72 0-5.5-4.5-10-10-10C6.47 2 2 6.5 2 12s4.5 10 10 10c.59 0 1.16-.06 1.72-.16A5.9 5.9 0 0113 19c0-.29.03-.57.07-.85-.32.63-.67 1.24-1.07 1.81-.83-1.2-1.5-2.53-1.91-3.96h3.72a5.95 5.95 0 012.59-2.4c.06-.53.1-1.06.1-1.6M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26m.82 2H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 015.08 16M8 8H5.08A7.923 7.923 0 019.4 4.44C8.8 5.55 8.35 6.75 8 8m6.34 6H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25-9.56c1.84.63 3.37 1.9 4.33 3.56h-2.95a15.65 15.65 0 00-1.38-3.56m7.91 12.81L17.75 22 15 19l1.16-1.16 1.59 1.59 3.59-3.59 1.16 1.41z" />
              </svg>
            }
            btntitle="Web Technologies"
          >
            <OfferList text="Dot Net Framework 4.5" status="active" />
            <OfferList
              text="Languages : ASP .Net , C# , AJAX, MVC"
              status="active"
            />
          </PricingBox>
          <PricingBox
            icon={
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                height="40"
                width="40"
              >
                <path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 01-2-2V8a2 2 0 012-2h6zm-5.75 14H3a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v4a2 2 0 012 2v10a2 2 0 01-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            }
            btntitle="Mobile Technology"
          >
            <OfferList text="Android Framework Platform :" status="active" />
            <OfferList text="Android 3.0 (Honeycomb)" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Tech;
