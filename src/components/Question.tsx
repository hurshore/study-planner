type Props = {
  sn: number;
  question: string;
};

const Question = ({ sn, question }: Props) => {
  return (
    <div className="flex flex-col justify-between w-full md:w-[calc(50%-20px)]">
      <div className="flex mb-4 md:mb-6">
        <p className="mr-2 font-semibold text-sm md:text-base">{sn}.</p>
        <p className="font-semibold text-sm md:text-base">{question}</p>
      </div>
      <textarea
        className="mt-4 w-full h-32 p-2 text-sm border border-gray-300  rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400"
        placeholder="Type your answer here..."
      ></textarea>
    </div>
  );
};

export default Question;
