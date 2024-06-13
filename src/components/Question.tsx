type Option = {
  id: number;
  option: string;
};

export type Question = {
  id: number;
  sn: number;
  question: string;
  options: Option[];
  answer: number; // option id
};

type Props = {
  question: Question;
};

const Question = ({ question }: Props) => {
  return (
    <div className="rounded-2xl py-6 px-4 md:p-8 shadow">
      <div className="flex md:text-lg mb-4">
        <p className="mr-1">{question.sn}.</p>
        <p>{question.question}</p>
      </div>
      <div className="flex flex-col gap-2">
        {question.options.map((option) => {
          const optionId = question.id.toString() + option.id.toString();
          return (
            <div key={option.id} className="flex p-2">
              <input
                type="radio"
                id={optionId}
                name={question.id.toString()}
                className="mr-2 w-4 checked:bg-primary-400 accent-primary-400"
              />
              <label
                htmlFor={optionId}
                className="text-sm md:text-base cursor-pointer"
              >
                {option.option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
