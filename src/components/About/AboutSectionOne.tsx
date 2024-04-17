import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="lg:pt-22 pt-10 md:pt-12">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Empowering Healthcare Through Technology"
                paragraph="Healthvalors Technologies is an offshore software development company located in Ahmedabad, Gujarat, India. Since our launch in 2003, we have enjoyed continuous year on year growth and have successfully partnered with renowned organizations to deliver real results on time and on budget. The company in last more than 10 years has delivered many potential, viable and scalable solutions to many trusted clients across India."
                paragraph1=""
                paragraph2=""
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <h2 className="mb-4 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                    Our company has been providing different types of software
                    services{" "}
                  </h2>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="HMIS" />
                    <List text=" Healthcare IT Solutions" />
                    <List text="Telemedicine solutions" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Rural Health" />
                    <List text="other maintenance services etc." />
                    {/* <List text="" /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle
              title=""
              paragraph="Our area of expertise lies specifically in the HMIS. We are trusted provider of solutions to the Hospital Sector; As a Hospital/Doctor your top priority to deliver high quality patient care never changes. You need an IT partner who understands your issues and proposes solutions that support the business side of healthcare. That partner is Healthvalors Technology."
              paragraph1="The solutions we offer can improve the performance and stability of your workforce, resulting in measurable improvement in the quality of patient care, as well as tangible financial benefits.
              Our clients are confident that we will deliver on our promises every time, which is why many of our clients choose Healthvalors Technology as their preferred partner for all of their software requirements."
              paragraph2="We giving our clients the assurance that all our products and services are delivered at the highest level. Through our low cost, high quality and reliable offshore software services, we serve our clients giving them value for money and thus client satisfaction."
              mb="44px"
            />

            {/* <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Premium quality" />
                  <List text="Tailwind CSS" />
                  <List text="Use for lifetime" />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Next.js" />
                  <List text="Rich documentation" />
                  <List text="Developer friendly" />
                </div>
              </div>
            </div> */}
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <Image
                src="/images/about/about-image.svg"
                alt="about-image"
                fill
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <Image
                src="/images/about/about-image-dark.svg"
                alt="about-image"
                fill
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
