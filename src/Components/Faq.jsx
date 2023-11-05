import { useState } from "react";
import Container from "./Container";
import SectionHeading from "./UI/SectionHeading";

const faqData = [
  {
    question: "How to contact with riders emergency ?",
    ans: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    question: "App installation failed, how to update system information?",
    ans: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    question: "Website reponse taking time, how to improve?",
    ans: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    question: "New update fixed all bug and issues",
    ans: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
];

const Faq = () => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="pt-32">
      <Container>
        <div>
          <SectionHeading
            subheading="Frequent Question"
            heading="Do you have any question"
          />
          <div className="flex flex-col  divide-y divide-slate-200 mt-[80px] px-12 ">
            {faqData.map((data, i) => (
              <FaqCard
                curOpen={curOpen}
                onOpen={setCurOpen}
                title={data.question}
                num={i}
                key={data.question}
              >
                {data.ans}
              </FaqCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const FaqCard = ({ num, title, curOpen, onOpen, children }) => {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="flex gap-4 p-6 " onClick={handleToggle}>
      <div>
        {isOpen ? (
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
              d="M9.99996 -0.00146484C4.48608 -0.00146484 0 4.48402 0 9.99852C0 15.5125 4.48608 19.998 9.99996 19.998C15.5138 19.998 19.9999 15.5125 19.9999 9.99852C19.9999 4.48402 15.5138 -0.00146484 9.99996 -0.00146484ZM14.8076 10.7679H5.1923C4.76762 10.7679 4.42304 10.4233 4.42304 9.99852C4.42304 9.57433 4.76762 9.22917 5.1923 9.22917H14.8076C15.2323 9.22917 15.5769 9.57433 15.5769 9.99852C15.5769 10.4233 15.2323 10.7679 14.8076 10.7679Z"
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
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.99994 -0.00146484C4.4862 -0.00146484 0 4.48399 0 9.99852C0 15.5125 4.4862 19.998 9.99994 19.998C15.5138 19.998 20 15.5125 20 9.99852C20 4.48399 15.5138 -0.00146484 9.99994 -0.00146484ZM14.8076 10.7673H10.7692V14.998C10.7692 15.4232 10.4246 15.7679 9.99994 15.7679C9.57538 15.7679 9.2308 15.4232 9.2308 14.998V10.7673H5.1923C4.76772 10.7673 4.42301 10.4227 4.42301 9.99852C4.42301 9.57325 4.76772 9.2297 5.1923 9.2297H9.2308V5.3824C9.2308 4.95821 9.57538 4.61358 9.99994 4.61358C10.4246 4.61358 10.7692 4.95821 10.7692 5.3824V9.2297H14.8076C15.2323 9.2297 15.5769 9.57325 15.5769 9.99852C15.5769 10.4227 15.2323 10.7673 14.8076 10.7673Z"
              fill="#3FDBB1"
            />
          </svg>
        )}
      </div>

      <div>
        <p
          className="title font-primary text-lg/[30px] font-medium"
          style={{ color: "#0F2137" }}
        >
          {title}
        </p>
        {isOpen && (
          <div
            className="font-primary text-base/[36px] font-normal"
            style={{ color: "#343D48" }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
