"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Hims from "@/app/hims/page";
const Slider = () => {
  const handleClick = () => {
    window.location.href = "/hims";
  };
  const handleClick1 = () => {
    window.location.href = "/hims";
  };
  const handleClick2 = () => {
    window.location.href = "/hims";
  };
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-0 pt-[80px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[0px] xl:pt-[0px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="swiper h-full w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {/* <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg ">
            
            <Image
              src="/images/slider/7.png"
              alt=""
              width={1600}
              height={500}
              className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
            ></Image>
            <Image
              src="/images/slider/2.gif"
              alt=""
              width={1600}
              height={500}
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
            ></Image>
           
          </SwiperSlide> */}
          <SwiperSlide className="relative">
            <div className="absolute left-1/4 top-1/2 max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-md p-8 text-white ">
              {/* <div className="title mb-4 text-3xl font-bold">Slide 1</div> */}
              <h3 className=" mb-2 text-xl font-semibold">Empowering HIMS</h3>
              <h3 className="mb-1 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {/* Transforming Healthcare with Technology */}
                <TypeAnimation
                  sequence={[
                    // // Same substring at the start will only be typed out once, initially
                    // "Transforming Healthcare with Technology is vital for modernization.",
                    // 1000, // wait 1s before replacing "Mice" with "Hamsters"
                    // "Transforming Healthcare with Technology enhances patient care.",
                    // 1000,
                    // "Transforming Healthcare with Technology revolutionizes medical practices.",
                    // 1000,
                    " Health Software",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{ fontSize: "1.875rem", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h3>

              {/* <div className="subtitle mb-4 text-lg font-semibold">
                Subtitle
              </div> */}
              {/* <h2 className="mb-4 text-3xl font-bold">Health Software</h2> */}
              {/* <div className="text text-base">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                </p>
              </div> */}
              <p className="text-lg text-white">
                Revolutionizing healthcare management. Our software solutions
                streamline processes, enhance patient care, and optimize
                efficiency.
              </p>
              <div>
                <button
                  className="mt-4 rounded bg-[#43d5cb] px-4 py-2 text-gray-200 hover:bg-blue-700"
                  onClick={handleClick}
                >
                  Learn More
                </button>
              </div>
            </div>
            <Image
              src="/images/slider/7.png"
              alt=""
              width={1600}
              height={500}
              className="h-full w-full rounded-md object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-1/4 top-1/2 max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-md p-8 text-white ">
              {/* <div className="title mb-4 text-3xl font-bold">Slide 1</div> */}
              <h3 className=" mb-2 text-xl font-semibold">
                Advanced HIMS Technology
              </h3>
              <h2 className="mb-4 text-3xl font-bold">
                {" "}
                Innovative Solutions for Healthcare Providers
              </h2>

              <p className="text-lg text-white">
                Maximize efficiency with our HIMS technology. Intuitive
                interfaces and robust features keep you ahead in healthcare.
              </p>
              <div>
                <button
                  className="mt-4 rounded bg-[#43d5cb] px-4 py-2 text-gray-200 hover:bg-blue-700"
                  onClick={handleClick1}
                >
                  Learn More
                </button>
              </div>
            </div>
            <Image
              src="/images/slider/8.png"
              alt=""
              width={1600}
              height={500}
              className="h-full w-full rounded-md object-cover"
            ></Image>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute left-1/4 top-1/2 max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-md p-8 text-white ">
              {/* <div className="title mb-4 text-3xl font-bold">Slide 1</div> */}
              <h3 className=" mb-2 text-xl font-semibold">
                Revolutionizing Practice Efficiency
              </h3>
              <h2 className="mb-4 text-3xl font-bold">
                {" "}
                Next-Gen Healthcare Management
              </h2>

              <p className="text-lg text-white">
                Experience the future of healthcare management. Our innovative
                HIMS platform optimizes practice operations, saving time and
                resources.
              </p>
              <div>
                <button
                  className="mt-4 rounded bg-[#43d5cb] px-4 py-2 text-gray-200 hover:bg-blue-700"
                  onClick={handleClick2}
                >
                  Learn More
                </button>
              </div>
            </div>
            <Image
              src="/images/slider/9.png"
              alt=""
              width={1600}
              height={500}
              className="h-full w-full rounded-md object-cover"
            ></Image>
          </SwiperSlide>
          {/* <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
            <Image
              src="/images/slider/8.png"
              alt=""
              width={1600}
              height={500}
              className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
            ></Image>
            <Image
              src="/images/slider/4.gif"
              alt=""
              width={1600}
              height={500}
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
            ></Image>
          </SwiperSlide> */}
          {/* <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
            <Image
              src="/images/slider/9.png"
              alt=""
              width={1600}
              height={500}
              className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
            ></Image>
            <Image
              src="/images/slider/6.gif"
              alt=""
              width={1600}
              height={500}
              className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
            ></Image>
          </SwiperSlide> */}
        </Swiper>
      </div>
      {/* //{" "} */}
    </section>
  );
};

export default Slider;
