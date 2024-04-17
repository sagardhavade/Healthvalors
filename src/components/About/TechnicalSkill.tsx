import Image from "next/image";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const TechnicalSkill = () => {
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
                  Technical Skills
                </h2>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"></p>
              </div>
              {/* <div className="mb-9"> */}
              {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Advantages of working with Healthvalors Technologies
                </h3> */}
              {/* <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Dedicated full time experienced IT professional team is here
                  to enhance your business solutions within the time frame in
                  view of commercial considerations that helps you achieve your
                  goals and improve your return on investment (ROI).
                </p> */}
              {/* </div> */}
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <h2 className="mb-4 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                    Client Server Technology
                  </h2>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Microsoft Visual Studio – Is an integrated development environment (IDE) from Microsoft" />
                    <List text="Languages :Visual Basic 6.0" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Database Tools : Microsoft SQL Server 2005/2008/2012" />
                    <List text="Reporting Tool – Crystal Reports 8.5" />
                  </div>
                  <h2 className="mb-4 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                    Web Technologies
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </h2>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Dot Net Framework 4.5" />
                    <List text="BI Tool – SQL Server Reporting Services 2005" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Languages : ASP .Net , C# , AJAX, MVC" />
                    <List text="Database Tools : Microsoft SQL Server 2005/2008/2012" />
                  </div>
                  <h2 className="mb-4 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
                    Mobile Technology
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </h2>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Android Framework&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Platform : Android 3.0 (Honeycomb)" />
                  </div>
                </div>
              </div>
              <div className="mb-1">
                {/* <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Mobile Technology
                </h3>
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Android Framework" />
                </div>
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text="Platform : Android 3.0 (Honeycomb)" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkill;
