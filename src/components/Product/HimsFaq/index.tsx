"use client";

// import { Body, H1 } from "../design-system/formatting";
import QA from "./QA";

const dataQA = [
  {
    question: "Registration, Admission, Discharge and Transfer (RADT)",
    answer:
      "<b>Patient Registration</b>\n Provides access to all patient registration procedures – normal, Revisits and Emergency\nPatient Identification Number (UID(AADHAR)/CR No./ Organization specific No.)\n",
  },
  {
    question: "What's a foot long and slippery?",
    answer: "A slipper!",
  },
  {
    question: "What do you call cheese that's stolen?",
    answer: "Nacho cheese!",
  },
  {
    question: "What do you like about Switzerland?",
    answer: "Well, for a start, the flag is a big plus!",
  },
];

const FAQ = () => {
  return (
    <>
      <h1 className="mb-4  text-center text-2xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[35px]">
        Features And Modules
      </h1>
      {/* {dataQA.map((data, i) => (
        <div key={i}>
          <QA question={data.question} answer={data.answer} />
        </div>
      ))} */}
      {/* {dataQA.map((data, i) => {
        const formattedAnswer = data.answer.replace(/\n/g, "<br/>");
        return (
          <div key={i}>
            <QA
              question={data.question}
              answer={
                <span dangerouslySetInnerHTML={{ __html: formattedAnswer }} />
              }
            />
          </div>
        );
      })} */}
      {dataQA.map((data, i) => {
        // Replace newline characters with <br/> tags
        const formattedAnswer = data.answer.replace(/\n/g, "<br/>");

        // Replace <b>...</b> tags with actual bold HTML tags
        const formattedAnswerWithBold = formattedAnswer.replace(
          /<b>(.*?)<\/b>/g,
          "<strong>$1</strong>",
        );

        return (
          <div key={i}>
            <QA
              question={data.question}
              answer={
                <span
                  dangerouslySetInnerHTML={{ __html: formattedAnswerWithBold }}
                />
              }
            />
          </div>
        );
      })}
    </>
  );
};

export default FAQ;
