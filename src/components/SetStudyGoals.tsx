import CloseIcon from './CloseIcon';
import GoalIcon from './GoalIcon';

const heading = 'Set your study goals';
const subheading =
  'Add goals from your personalized suggestions or input a new goal below';
const addGoal = 'Add a new study goal';
const placeholder = 'e.g. "Improve understanding of Algebra"';
const noGoals = 'You have not added any study goal';

export type Goal = {
  id: string;
  goal: string;
};

type Props = {
  goals: Goal[];
  removeGoal: (id: string) => void;
};

const SetStudyGoals = ({ goals, removeGoal }: Props) => {
  return (
    <div className="flex flex-col flex-1 bg-white px-4 py-10 lg:px-8 rounded-2xl shadow">
      <div>
        <h3 className="text-2xl text-primary-700 font-bold mb-2">{heading}</h3>
        <p className="text-text-3 font-medium">{subheading}</p>
      </div>
      <div className="my-6 lg:my-8">
        <p className="text-sm font-medium text-grey-900 mb-2">{addGoal}</p>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full outline-none border border-grey-300 rounded-lg p-4 text-sm placeholder:text-grey-500 focus:border-primary-200"
        />
      </div>
      {goals.length > 0 ? (
        <div className="flex flex-col gap-2">
          {goals.map((goal) => (
            <div className="flex items-center justify-center p-4 rounded-lg border border-grey-500">
              <p className="flex-1 text-sm lg:text-base text-text-3 font-medium">
                {goal.goal}
              </p>
              <div
                onClick={() => removeGoal(goal.id)}
                className="flex justify-center items-center self-center w-8 h-8 ml-4 bg-error-400 rounded cursor-pointer"
              >
                <CloseIcon stroke="stroke-white" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col flex-1 justify-center border border-grey-300 rounded-2xl p-4 pb-6">
          <div className="flex justify-center mb-2">
            <GoalIcon className="fill-grey-400 w-10 h-10" />
          </div>
          <p className="text-sm lg:text-base text-text-3 font-medium text-center">
            {noGoals}
          </p>
        </div>
      )}
    </div>
  );
};

export default SetStudyGoals;
