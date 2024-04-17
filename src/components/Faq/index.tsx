"use client";

// import { Body, H1 } from "../design-system/formatting";
import QA from "./QA";

const dataQA = [
  {
    question: "What do you call a cow in an earthquake?",
    answer: "A milkshake!",
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
        FAQ
      </h1>
      {dataQA.map((data, i) => (
        <div key={i}>
          <QA question={data.question} answer={data.answer} />
        </div>
      ))}
    </>
  );
};

export default FAQ;
