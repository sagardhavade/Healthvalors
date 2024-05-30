// pages/index.tsx
import { featuresData } from "./HimsFeature";
import SingleFeature from "./HimsSingleFeature";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* <div className="w-full p-4 lg:w-1/2">
        
        <div className="h-full bg-gray-100 p-4">Column 1 content here</div>
      </div>
      <div className="w-full p-4 lg:w-1/2">
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div> */}
      {featuresData.map((feature) => (
        <SingleFeature key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default HomePage;
