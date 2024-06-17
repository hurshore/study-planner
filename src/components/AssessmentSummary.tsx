import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import CheckIcon from './CheckIcon';
import { Goal } from './SetStudyGoals';
// images
import PlusIcon from '@/assets/icons/plus.svg';

const heading = 'Assessment Summary';
const subheading =
  'Your assessment results, highlighting strengths and areas for improvement';
const strengthHeading = 'Strengths';
const strengths =
  'HTML Basics, Basic Web Design Principles, Understanding of CSS Syntax, Color Theory and Typography';
const improvementHeading = 'Areas for Improvement';
const improvements =
  'Advanced CSS, Responsive Design, CSS Flexbox and Grid Layouts, CSS Animations and Transitions';
const suggestionsHeading = 'Personalized Suggestions';
const suggestions = [
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

type Props = {
  goals: Goal[];
  addGoal: (goal: string, id?: string) => void;
};

const AssessmentSummary = ({ goals, addGoal }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow px-4 py-6 mb-4 lg:px-8 lg:py-10 rounded-2xl gap-4">
      <div className="flex flex-col flex-1">
        <div>
          <h3 className="text-xl lg:text-2xl text-primary-700 font-bold mb-2">
            {heading}
          </h3>
          <p className="text-sm lg:text-base text-text-3 font-medium">
            {subheading}
          </p>
        </div>
        <div className="my-8">
          <p className="font-semibold mb-2 text-text-2 lg:text-lg">
            {strengthHeading}
          </p>
          <p className="text-sm lg:text-base font-medium text-text-3">
            {strengths}
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2 text-text-2 lg:text-lg">
            {improvementHeading}
          </p>
          <p className="text-sm lg:text-base font-medium text-text-3">
            {improvements}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-[#F2ECF9] py-6 px-4 lg:px-6 rounded-xl">
        <h3 className="font-semibold text-text-2 mb-2 lg:text-lg">
          {suggestionsHeading}
        </h3>
        <div className="flex flex-1 flex-col gap-3">
          {suggestions.map((suggestion) => {
            const isSelected = goals.some((goal) => goal.id === suggestion.id);
            return (
              <div key={suggestion.id} className="flex text-sm font-medium">
                <p className="text-xl leading-5 mr-2">•</p>
                <p className="flex-1 lg:text-base">{suggestion.text}</p>
                <div
                  onClick={() => addGoal(suggestion.text, suggestion.id)}
                  className={`flex justify-center items-center self-center w-8 h-8 ml-4 rounded cursor-pointer ${
                    isSelected ? 'bg-success-400' : 'bg-primary-400'
                  }`}
                >
                  {isSelected ? (
                    <CheckIcon stroke="stroke-white" />
                  ) : (
                    <Image src={PlusIcon} alt="plus icon" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AssessmentSummary;
