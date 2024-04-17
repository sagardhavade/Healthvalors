import Image from "next/image";
import Link from "next/link";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const Career = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
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
                  CAREER
                </h2>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  {/* We believe that great people build great businesses and we are
                  always interested to hear from fresh-thinking, talented people
                  who share our values and passion for the work they do. */}
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {/* Advantages of working with Healthvalors Technologies */}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Dedicated full time experienced IT professional team is here
                  to enhance your business solutions within the time frame in
                  view of commercial considerations that helps you achieve your
                  goals and improve your return on investment (ROI).
                  <br />
                  Across our business you will find a wide variety of people,
                  all with different experiences, bringing their individual
                  strengths to the table. Dedicated, creative and with a
                  positive attitude, our people work together to create a
                  successful and vibrant business.
                  <br />
                  Sound like somewhere you would like to work? Believe you have
                  something to offer? We currently have career opportunities
                  open to you in the following areas:
                </p>
              </div>
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  {/* <h2 className="mb-4 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                    Client Server Technology
                  </h2> */}
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Junior ASP.Net Developer (MVC, Razor)" />
                    <List text="Senior ASP.Net Developer (MVC, Razor)" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Database Administrator (SQL Server 2008 R2 & above)" />
                    <List text="Client Support Executive/Tester (ERP Implementation)" />
                  </div>
                </div>
              </div>
              <div className="mb-1">
                {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Mobile Technology
                </h3> */}
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We are always pleased to hear from skilled and experienced
                  individuals who believe they can add value to our business so
                  why not click below to email us and tell us a little bit more
                  about yourself, your skills, your experience and your
                  expectations. Send your resume on{" "}
                  <Link
                    href="mailto:hr@healthvalors.com"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    hr@healthvalors.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
