import CheckIcon from './CheckIcon';
import CloseIcon from './CloseIcon';

export type Question = {
  id: number;
  courseId: number;
  question: string;
  options: string[];
  answer: number; // option index
  topic: string;
  difficultyLevel: number;
};

type Props = {
  chosenAnswer?: number;
  question: Question;
  sn: number; // TODO: remove this when the sn field is added to the question object
  showAnswer?: boolean;
  addAnswer?: (questionId: number, chosenAnswer: number) => void;
};

const Question = ({
  chosenAnswer,
  question,
  showAnswer = false,
  sn,
  addAnswer,
}: Props) => {
  console.log(chosenAnswer);
  const handleAnswer = (questionId: number, chosenAnswer: number) => {
    if (addAnswer) {
      addAnswer(questionId, chosenAnswer);
    }
  };

  return (
    <div className="rounded-2xl py-6 px-4 md:p-8 shadow bg-white">
      <div className="flex md:text-lg mb-4 text-text-2">
        <p className="mr-1">{sn}.</p>
        <p>{question.question}</p>
      </div>
      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => {
          const optionId = question.id.toString() + index.toString();
          let bg = 'tranparent';
          let border = 'border-grey-500';
          let checkedDot = 'checked:before:bg-primary-400';
          let icon: JSX.Element | null = null;

          if (showAnswer) {
            if (index === question.answer) {
              bg = 'bg-success-300';
              checkedDot = 'checked:before:bg-success-400';
              icon = <CheckIcon />;
              border = index === chosenAnswer ? 'border-success-400' : border;
            } else if (index === chosenAnswer) {
              bg = 'bg-error-300';
              border = 'border-error-400';
              checkedDot = 'checked:before:bg-error-400';
              icon = <CloseIcon />;
            }
          }

          return (
            <div
              key={option}
              className={`flex items-center justify-between p-2 rounded-lg ${bg}`}
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleAnswer(question.id, index)}
              >
                <input
                  readOnly
                  type="radio"
                  id={optionId}
                  name={question.id.toString()}
                  checked={showAnswer ? index === chosenAnswer : undefined}
                  className={`mr-2 w-4 ${border} ${checkedDot}`}
                />
                <label
                  htmlFor={optionId}
                  className="text-sm text-grey-700 md:text-base"
                >
                  {option}
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
