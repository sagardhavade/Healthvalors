"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const Slider = () => {
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
          <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg ">
            <Image
              src="/images/slider/1.gif"
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
            {/* Slide 1 */}
          </SwiperSlide>
          {/* <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide> */}
          <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
            <Image
              src="/images/slider/3.gif"
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
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
            <Image
              src="/images/slider/5.gif"
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
          </SwiperSlide>
          {/* <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-white text-center text-lg">
          Slide 9
        </SwiperSlide> */}
        </Swiper>
      </div>
      {/* //{" "} */}
    </section>
  );
};

export default Slider;
