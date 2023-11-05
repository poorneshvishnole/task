// w-[510px] h-[124px]

const SectionHeading = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col justify-center shrink-0 ">
      <p
        style={{ color: "#EF9E48" }}
        className=" text-center font-primary  font-semibold text-sm/[40px] tracking-[2px] uppercase "
      >
        {subheading}
      </p>
      <h1 className="text-slate-800 font-bold font-primary text-center text-4xl/[55px] ">
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeading;
