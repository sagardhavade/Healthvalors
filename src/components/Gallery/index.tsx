"use client";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
interface GridGalleryProps {
  images: string[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ images }) => {
  const [imagesShownArray, setImagesShownArray] = useState<boolean[]>(
    Array(images.length).fill(false),
  );

  const imageVisibleChange = (index: number, isVisible: boolean) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
          {images &&
            images.map((imageUrl, index) => (
              <VisibilitySensor
                key={index}
                partialVisibility={true}
                offset={{ bottom: 80 }}
                onChange={(isVisible) => imageVisibleChange(index, isVisible)}
              >
                <GridGalleryCard
                  imageUrl={imageUrl}
                  show={imagesShownArray[index]}
                />
              </VisibilitySensor>
            ))}
        </div>
      </div>
    </section>
  );
};

interface GridGalleryCardProps {
  imageUrl: string;
  show: boolean;
}

const GridGalleryCard: React.FC<GridGalleryCardProps> = ({
  imageUrl,
  show,
}) => {
  return (
    <div
      className={`relative transform transition duration-300 ease-in ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="z-10 mx-auto self-center text-sm uppercase tracking-widest text-white">
          {/* Hello World */}
        </div>
      </div>
      {/* <img src={imageUrl} alt="" /> */}
      <Image src={imageUrl} alt="" width={500} height={500} priority={true} />
    </div>
  );
};

export default GridGallery;
