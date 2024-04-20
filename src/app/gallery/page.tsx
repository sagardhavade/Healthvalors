import Breadcrumb from "@/components/Common/Breadcrumb";
import GridGallery from "@/components/Gallery";
const Gallery = () => {
  const images = [
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
    "/images/about/about-image-2.svg",
  ];

  return (
    <>
      <Breadcrumb
        pageName="Gallery Page"
        description="Empowering Healthcare Through Technology
"
      />
      <GridGallery images={images} />
    </>
  );
};

export default Gallery;
