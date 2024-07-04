import { v4 as uuidv4 } from 'uuid';

import GoalIcon from './GoalIcon';
import StudyPlanBox, { StudyBoxColOne, StudyBoxColTwo } from './StudyPlanBox';

const goals = [
  { id: uuidv4(), text: 'Focus on CSS Flexbox and Grid layout' },
  { id: uuidv4(), text: 'Complete CSS challenges on CodePen' },
  {
    id: uuidv4(),
    text: 'Learn Advanced CSS Selectors and Combinators for More Precise Styling',
  },
  {
    id: uuidv4(),
    text: 'In-Depth Learning of CSS Flexbox and Grid Layout Systems for Advanced Page Structuring',
  },
  { id: uuidv4(), text: 'Practice creating responsive web pages' },
];

const heading = 'Goals';
const subheading =
  'Your study plan has been personalized and generated based on the goals you added';

const StudyGoals = () => {
  return (
    <StudyPlanBox>
      <StudyBoxColOne>
        <div className="flex items-center justify-center w-12 h-12 mb-2 border border-grey-300 rounded-lg">
          <GoalIcon className="fill-secondary-400 w-6 h-6" />
        </div>
        <div className="flex-1 lg:pl-4">
          <h3 className="font-bold text-xl text-text-2 mb-2">{heading}</h3>
          <p className="font-medium text-sm lg:text-base text-grey-700 mb-4">
            {subheading}
          </p>
        </div>
      </StudyBoxColOne>

      <StudyBoxColTwo>
        <div className="flex flex-col gap-4 p-2">
          {goals.map((goal) => (
            <div key={goal.id} className="flex items-center">
              <div className="w-4 h-4 rounded mr-2 bg-secondary-400" />
              <p className="font-medium text-sm lg:text-base text-grey-700 flex-1">
                {goal.text}
              </p>
            </div>
          ))}
        </div>
      </StudyBoxColTwo>
    </StudyPlanBox>
  );
};

export default StudyGoals;
