import { Feature } from "@/types/feature";
import Link from "next/link";
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { id, icon, title, paragraph } = feature;
  let featureUrl = "";
  switch (id) {
    case 1:
      featureUrl = `/hims/`;
      break;
    case 2:
      featureUrl = `/medicalClgSw/`;
      break;
    case 3:
      featureUrl = `/ivfCare/`;
      break;
    case 4:
      featureUrl = `/ruralHealth/`;
      break;
    default:
      featureUrl = `/#`;
  }
  return (
    <div className="max-w-sm overflow-hidden rounded p-8 shadow-lg">
      <Link href={featureUrl}>
        <div className="w-1/2">
          <div className="wow fadeInUp" data-wow-delay=".15s">
            <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
              {icon}
            </div>
            <h3 className="font-semibold-1000 mb-5 text-xl   text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
            {/* <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleFeature;
