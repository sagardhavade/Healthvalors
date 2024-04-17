import { useState } from "react";

type QAProps = {
  question: string;
  // answer: string;
  answer: React.ReactNode;
};

const QA = (props: QAProps) => {
  const [showQA, setShowQA] = useState(false);

  return (
    <div className="mx-auto my-6 flex max-w-6xl flex-col gap-6 rounded-lg border px-3 py-10">
      <button
        className="flex flex-row items-center justify-between gap-4 font-medium"
        onClick={() => setShowQA(!showQA)}
      >
        <span className="text-xl">{props.question}</span>
        <span className="text-lg text-gray-500">{showQA ? "↑" : "↓"}</span>
      </button>
      {showQA && <p className="text-lg">{props.answer}</p>}
    </div>
  );
};

export default QA;
