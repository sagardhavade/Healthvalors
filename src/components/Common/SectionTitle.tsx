const SectionTitle = ({
  title,
  paragraph,
  paragraph1,
  paragraph2,
  width = "570px",
  center,
  mb = "10px",
}: {
  title: string;
  paragraph: string;
  paragraph1: string;
  paragraph2: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4  text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base  !leading-relaxed text-body-color md:text-lg">
          {paragraph}
          <br />
          <br />
          {paragraph1}
          <br />
          <br />
          {paragraph2}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
