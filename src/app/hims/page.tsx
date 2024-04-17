import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQ from "@/components/Product/HimsFaq";
const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const Hims = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <>
      <Breadcrumb
        pageName="HIMS Page"
        description="Transforming Healthcare Delivery With Innovative Solutions"
      />
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
                    HMIS
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    A Hospital Management Information System (HMIS) is an
                    element of health informatics that focuses mainly on the
                    administrational needs of hospitals. In many
                    implementations, a HIS is a comprehensive, integrated
                    information system designed to manage all the aspects of a
                    hospital’s operation, such as medical, administrative,
                    financial, and legal issues and the corresponding processing
                    of services.
                    <br />
                    One of the most important issues is health services.
                    Hospitals provide a medical assistance to people.
                    <br />
                    Hospital Management Information Systems <b>(HMIS)</b>{" "}
                    provide a common source of information about a patient’s
                    health history. The system has to keep data in secure place
                    and controls who can reach the data in certain
                    circumstances. These systems enhance the ability of health
                    care professionals to coordinate care by providing a
                    patient’s health information and visit history at the place
                    and time that it is needed. Patient’s laboratory test
                    information also visual results such as X-ray may reachable
                    from professionals. <b>HMIS</b> provide internal and
                    external communication among health care providers.
                    <br />
                    The <b>HMIS</b> may control organizations, which is Hospital
                    in these case, official documentations, financial situation
                    reports, personal data, utilities and stock amounts, also
                    keeps in secure place patients information, patients medical
                    history, prescriptions, operations and laboratory test
                    results.
                    <br />
                    The <b>HMIS</b> may protect organizations, handwriting
                    error, overstock problems, conflict of scheduling personnel,
                    and official documentation errors like tax preparations
                    errors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
};

export default Hims;
