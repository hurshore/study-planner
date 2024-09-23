import { v4 as uuidv4 } from 'uuid';

import GoalIcon from './GoalIcon';
import StudyPlanBox, { StudyBoxColOne, StudyBoxColTwo } from './StudyPlanBox';

const heading = 'Learning Objectives';
const subheading =
  'Your study plan has been personalized and generated based on the goals you added';

const objectives: LearningObjective[] = [
  {
    week: 1,
    objectives: [
      'Complete CSS Basics tutorial on MDN.',
      'Practice CSS selectors and combinators.',
      'Build a simple webpage using basic CSS.',
    ],
  },
  {
    week: 2,
    objectives: [
      'Learn about CSS Flexbox, including its properties and how it can be used to create flexible layouts.',
      'Complete Flexbox Froggy game to reinforce your understanding of Flexbox properties and how they work in practical scenarios.',
      'Apply Flexbox to a webpage layout by redesigning a simple webpage to use Flexbox for its layout.',
    ],
  },
  {
    week: 3,
    objectives: [
      'Study CSS Grid layout in depth, exploring its various properties and how it differs from Flexbox.',
      'Complete Grid Garden game to gain hands-on experience with CSS Grid properties and layout techniques.',
    ],
  },
  {
    week: 4,
    objectives: [
      'Dive into responsive design principles.',
      'Implement media queries in your projects.',
      'Explore CSS animations and transitions.',
    ],
  },
];

export type LearningObjective = {
  week: number;
  objectives: string[];
};

type Props = {
  objectives?: LearningObjective[];
};

const LearningObjectives = ({}: Props) => {
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
          {objectives ? (
            objectives.map((objective) => (
              <div key={objective.week}>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded mr-2 bg-secondary-400" />
                  <p className="font-bold text-text-2">Week {objective.week}</p>
                </div>

                <div className="pl-1">
                  {objective.objectives.map((objective, index) => (
                    <div
                      key={objective + index}
                      className="flex font-medium text-grey-700 text-sm lg:text-base"
                    >
                      <p className="mr-2">•</p>
                      <p className="flex-1">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </StudyBoxColTwo>
    </StudyPlanBox>
  );
};

export default LearningObjectives;
