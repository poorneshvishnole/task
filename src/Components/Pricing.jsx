import Container from "./Container";
import SectionHeading from "./UI/SectionHeading";

const planDetails = [
  {
    heading: "Free Plan",
    desc: "For Small teams or office",
    recommeded: false,
    startingFrom: "",
    price: "",
    advice: "",
    active: false,
    features: [
      {
        text: "Ultimate access to all course, exercises and assessments",
        disabled: true,
      },
      {
        text: "Free acess for all kind of exercise corrections with downloads.",
        disabled: true,
      },
      {
        text: "Total assessment corrections with free download access system",
        disabled: true,
      },
      {
        text: "Unlimited download of courses on the mobile app contents",
        disabled: false,
      },
      {
        text: "Download and print courses and exercises in PDF",
        disabled: false,
      },
    ],
    btnText: "Start free trail",
  },
  {
    heading: "Premium",
    desc: "For startup enterprise",
    startingFrom: "Starting from",
    price: 49.99,
    advice: "Recommended",
    active: "true",
    features: [
      {
        text: "Ultimate access to all course, exercises and assessments",
        disabled: true,
      },
      {
        text: "Free acess for all kind of exercise corrections with downloads.",
        disabled: true,
      },
      {
        text: "Total assessment corrections with free download access system",
        disabled: true,
      },
      {
        text: "Unlimited download of courses on the mobile app contents",
        disabled: true,
      },
      {
        text: "Download and print courses and exercises in PDF",
        disabled: true,
      },
    ],
    btnText: "Subscribe Now",
  },
];

const Pricing = () => {
  return (
    <div className="pt-20">
      <Container>
        <div className="flex flex-col justify-center items-center ">
          <SectionHeading
            subheading="Pricing Plan"
            heading="Choose your pricing policy"
          />

          <div className="flex w-[302px] h-[62px] justify-between bg-gray-50 rounded-md  pr-8 mt-7">
            <button
              className="font-primary px-6  text-base font-medium bg-white drop-shadow-md rounded-md m-2 "
              style={{ color: "#0F2137" }}
            >
              Monthly Plan
            </button>
            <button
              className=" font-primary text-base font-medium"
              style={{ color: "#0F2137" }}
            >
              Annual Plan
            </button>
          </div>
          <div className="flex mt-12 gap-4 mb-12">
            {planDetails.map((data) => {
              return <PriceBox key={data.heading} plan={data} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

const PriceBox = ({ plan }) => {
  const {
    heading,
    startingFrom,
    desc,
    price,
    features,
    btnText,
    active,
    advice,
  } = plan;

  const set = active
    ? " border-emerald-300 border-4"
    : " border border-gray-100";

  const pad = advice ? "pt-7 pb-12" : "pb-12 pt-20";
  return (
    <div
      className={`pl-9 pr-[50px] ${pad}  ${set} rounded-md flex flex-col mx-10`}
    >
      {advice && (
        <button
          className="p-1 text-white font-primary  font-bold text-sm leading-7 rounded-[5px] -tracking-[0.16px] mb-2 self-start"
          style={{ backgroundColor: "#EF9E48" }}
        >
          {advice}
        </button>
      )}
      <div className="flex justify-between ">
        <h1
          className="font-primary font-bold text-[22px] leading-normal"
          style={{ color: "#0F2137" }}
        >
          {heading}
        </h1>
        {startingFrom && (
          <p
            className="font-primary font-normal text-base leading-7"
            style={{ color: "#343D48" }}
          >
            {startingFrom}
          </p>
        )}
      </div>
      <div className="flex justify-between mb-10 ">
        <p
          className="font-primary font-normal text-base leading-7"
          style={{ color: "#343D48" }}
        >
          {desc}
        </p>
        {price && (
          <span
            className="font-bold font-primary text-[26px] leading-normal"
            style={{ color: "#25CB9E" }}
          >
            {price}/mo
          </span>
        )}
      </div>
      <ul>
        {features.map((el, i) => {
          return (
            <li key={i} className="mb-[20px]">
              <div className="flex">
                {el.disabled ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99996 -0.000976562C4.48608 -0.000976562 0 4.48395 0 9.99901C0 15.513 4.48608 19.9985 9.99996 19.9985C15.5138 19.9985 20 15.513 20 9.99901C20 4.48395 15.5138 -0.000976562 9.99996 -0.000976562ZM15.575 6.66406L9.42112 13.5872C9.2696 13.7571 9.05846 13.8447 8.84571 13.8447C8.67691 13.8447 8.50731 13.7893 8.3654 13.677L4.51916 10.5995C4.18761 10.3345 4.13384 9.85008 4.39921 9.51783C4.66426 9.18665 5.1488 9.13235 5.48035 9.39793L8.7561 12.0184L14.4249 5.64148C14.7066 5.3232 15.1934 5.2947 15.5107 5.57751C15.8284 5.85977 15.8573 6.34578 15.575 6.66406Z"
                      fill="#3FDBB1"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_510)">
                      <path
                        d="M10.0008 0C4.47816 0 0.00100708 4.47722 0.00100708 9.9999C0.00100708 15.5224 4.4781 20 10.0007 20C15.5233 20 20.0009 15.5224 20.0009 9.9999C20.0009 4.47722 15.5234 0 10.0008 0ZM13.7731 13.8113C13.3738 14.2102 12.727 14.2102 12.3281 13.8113L10.0526 11.5358L7.6736 13.9149C7.27454 14.3138 6.62767 14.3138 6.22881 13.9149C5.82955 13.5155 5.82955 12.8688 6.22881 12.4695L8.60766 10.0907L6.39274 7.87592C5.99381 7.47653 5.99381 6.82986 6.39274 6.43074C6.79181 6.03167 7.4388 6.03167 7.83793 6.43074L10.0527 8.64551L12.1641 6.534C12.5631 6.13507 13.2103 6.13494 13.6091 6.534C14.0083 6.9334 14.0083 7.58046 13.6091 7.97919L11.4979 10.0906L13.7732 12.366C14.1721 12.7649 14.1723 13.4121 13.7731 13.8113Z"
                        fill="#CED7E1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_510">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}

                <p
                  className="font-primary text-base/[26px] font-normal ml-5"
                  style={{ color: "#343D48" }}
                >
                  {el.text}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <button className=" py-3 px-[52px] mt-8 text-orange-400 font-primary font-bold text-base rounded-[5px] bg-orange-50 -tracking-[0.16px] self-center">
        {btnText}
      </button>
    </div>
  );
};

export default Pricing;
