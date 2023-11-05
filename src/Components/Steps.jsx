import React from "react";
import Container from "./Container";
import SectionHeading from "./UI/SectionHeading";

const stepsData = [
  {
    title: "Set disbursement Instructions",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests",
  },
  {
    title: "Assembly retrieves funds from your account",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests",
  },
  {
    title: "Assembly initiates disbursement",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests",
  },
  {
    title: "Customer receives funds payment",
    desc: "Get your blood tests delivered at home collect a sample from the your blood tests",
  },
];

const Steps = () => {
  return (
    <div className=" bg-gradient-to-r from-slate-50 to-violet-50 pt-12 pb-20">
      <Container>
        <div className="">
          <SectionHeading
            subheading="Whats the function"
            heading="Let’s see how it works"
          />
          <div className="flex gap-5 mt-28">
            {stepsData.map((data, i) => {
              return (
                <EachStep
                  stepInfo={data}
                  key={data.title}
                  num={i}
                  isLast={stepsData.length === i + 1}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

const EachStep = ({ stepInfo, num, isLast }) => {
  const { title, desc } = stepInfo;

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <div
          className="drop-shadow-2xl font-third bg-white text-3xl leading-normal font-normal px-3 py-2 rounded-[26px]"
          style={{ color: "#0F2137" }}
        >
          0{num + 1}
        </div>
        {!isLast && (
          <div>
            {num % 2 == 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="175"
                height="43"
                viewBox="0 0 204 43"
                fill="none"
              >
                <path
                  d="M1 32.7207C1 32.7207 93.3 -38.8069 196 32.7207"
                  stroke="#C2CBDE"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                <path
                  d="M181.219 39.4988C181.219 39.4988 200.334 45.0252 202.156 38.7642C203.978 32.5031 202.611 26.0287 196.694 17.1587"
                  stroke="#C2CBDE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="175"
                height="43"
                viewBox="0 0 204 43"
                fill="none"
              >
                <path
                  d="M0.481445 10.2583C0.481445 10.2583 92.7814 81.7859 195.481 10.2583"
                  stroke="#C2CBDE"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                <path
                  d="M180.7 3.47577C180.7 3.47577 199.816 -2.05055 201.638 4.21038C203.46 10.4713 202.093 16.9456 196.176 25.8154"
                  stroke="#C2CBDE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            )}
          </div>
        )}
      </div>
      <h1
        className="font-primary text-[22px] leading-[34px] font-medium mb-4"
        style={{ color: "#0F2137" }}
      >
        {title}
      </h1>
      <p
        className="font-primary font-normal text-sm leading-[26px]"
        style={{ color: "#343D48" }}
      >
        {desc}
      </p>
    </div>
  );
};

export default Steps;
