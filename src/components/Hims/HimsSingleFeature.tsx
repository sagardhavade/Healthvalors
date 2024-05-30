// SingleFeature.tsx
import { Feature } from "./HimsFeature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { category, points } = feature;
  return (
    <div className="max-w-full overflow-hidden ">
      <div className="w-full">
        <h3 className="mb-5 text-xl font-semibold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {category}
        </h3>
        <ul className="list-disc pl-5 text-base font-medium leading-relaxed text-body-color">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleFeature;
