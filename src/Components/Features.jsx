import Container from "./Container";

const features = [
  {
    id: 1,
    title: "80K+",
    description: "We have more than students",
    color: "text-orange-400",
  },
  {
    id: 2,
    title: "150+",
    description: "Free online tutorials videos avaialble",
    color: "text-orange-500",
  },
  {
    id: 3,
    title: "90+",
    description: "Daily updated blog post maintain",
    color: "text-pink-500",
  },
  {
    id: 4,
    title: "& 3M",
    description: "Job posted everydays with qualification",
    color: "text-fuchsia-400",
  },
];

const Feature = ({ title, description, color }) => {
  return (
    <div className="rounded-lg hover:drop-shadow-lg hover:-translate-y-2  shadow-[0_25px_100px_0px_rgba(69,87,157,0.08)] px-12 py-10">
      <h1
        className={`text-center ${color} text-[50px] font-bold font-primary leading-[55px] tracking-tight mb-5 `}
      >
        {title}
      </h1>
      <p className="text-center text-slate-600 font-primary text-sm font-normal leading-[25.32px] opacity-70 ">
        {description}
      </p>
    </div>
  );
};
const Features = () => {
  return (
    <div className="pt-12 ">
      <Container>
        <div className="  flex gap-10">
          <div className="grid grid-cols-2 basis-3/6 grid-rows-2 auto-rows-fr gap-10">
            {features.map((feature) => (
              <div key={feature.id}>
                <Feature
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                />
              </div>
            ))}
          </div>
          <div className=" basis-3/6">
            <p className=" text-orange-400 text-sm font-primary leading-10 font-semibold ">
              CORE FEATURES{" "}
            </p>
            <h1 className="text-slate-800 font-bold   font-primary leading-[55px] text-[48px] -tracking-[1.5px] mb-10">
              Smart Jackpots that you may love this anytime & anywhere
            </h1>
            <p className=" text-slate-900 font-primary text-[18px] font-normal leading-[42px] mb-[30px]">
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </p>

            <button className=" px-6 py-4 text-orange-400 font-primary font-bold text-base rounded-[5px] bg-orange-50 -tracking-[0.16px]">
              Explore Details
            </button>
          </div>
        </div>
        <div className="text-center">
          <a href="#pc" className=" cursor-pointer ">
            ⬇️
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Features;
