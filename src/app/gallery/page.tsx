import Breadcrumb from "@/components/Common/Breadcrumb";
import GridGallery from "@/components/Gallery";
const Gallery = () => {
  const images = [
    // "/images/gallery/1.jpg",
    // "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    // "/images/gallery/4.jpg",
    // "/images/gallery/5.jpg",
    // "/images/gallery/6.jpg",
    // "/images/gallery/7.jpg",
    // "/images/gallery/8.jpg",
    // "/images/gallery/9.jpg",
    // "/images/gallery/10.jpg",
    "/images/gallery/11.jpg",
    "/images/gallery/12.jpg",
    // "/images/gallery/13.jpg",
    // "/images/gallery/14.jpg",
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
