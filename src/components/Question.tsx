import CheckIcon from './CheckIcon';
import CloseIcon from './CloseIcon';

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
  chosenAnswer?: number;
  question: Question;
  showAnswer?: boolean;
};

const Question = ({ chosenAnswer, question, showAnswer = false }: Props) => {
  return (
    <div className="rounded-2xl py-6 px-4 md:p-8 shadow bg-white">
      <div className="flex md:text-lg mb-4 text-text-2">
        <p className="mr-1">{question.sn}.</p>
        <p>{question.question}</p>
      </div>
      <div className="flex flex-col gap-2">
        {question.options.map((option) => {
          const optionId = question.id.toString() + option.id.toString();
          let bg = 'tranparent';
          let border = 'border-grey-500';
          let checkedDot = '';
          let icon: JSX.Element | null = null;

          if (showAnswer) {
            if (option.id === question.answer) {
              bg = 'bg-success-300';
              checkedDot = 'checked:before:bg-success-400';
              icon = <CheckIcon />;
              border =
                option.id === chosenAnswer ? 'border-success-400' : border;
            } else if (option.id === chosenAnswer) {
              bg = 'bg-error-300';
              border = 'border-error-400';
              checkedDot = 'checked:before:bg-error-400';
              icon = <CloseIcon />;
            }
          }

          return (
            <div
              key={option.id}
              className={`flex items-center justify-between p-2 rounded-lg ${bg}`}
            >
              <div className="flex items-center">
                <input
                  readOnly
                  type="radio"
                  id={optionId}
                  name={question.id.toString()}
                  checked={showAnswer ? option.id === chosenAnswer : false}
                  className={`mr-2 w-4 ${border} ${checkedDot}`}
                />
                <label
                  htmlFor={optionId}
                  className="text-sm text-grey-700 md:text-base cursor-pointer"
                >
                  {option.option}
                </label>
              </div>
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
