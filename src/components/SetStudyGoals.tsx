import GoalIcon from './GoalIcon';

const heading = 'Set your study goals';
const subheading =
  'Add goals from your personalized suggestions or input a new goal below';
const addGoal = 'Add a new study goal';
const placeholder = 'e.g. "Improve understanding of Algebra"';
const noGoals = 'You have not added any study goal';

const SetStudyGoals = () => {
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
      <div className="flex flex-col flex-1 justify-center border border-grey-300 rounded-2xl p-4 pb-6">
        <div className="flex justify-center mb-2">
          <GoalIcon className="fill-grey-400 w-10 h-10" />
        </div>
        <p className="text-sm text-text-3 font-medium text-center">{noGoals}</p>
      </div>
    </div>
  );
};

export default SetStudyGoals;
