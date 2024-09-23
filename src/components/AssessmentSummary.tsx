import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import CheckIcon from './CheckIcon';
import PulsingText from './PulsingText';
import SuggestionsSkeleton from './SuggestionsSkeleton';
import { Goal } from './SetStudyGoals';
// images
import PlusIcon from '@/assets/icons/plus.svg';

const heading = 'Assessment Summary';
const subheading =
  'Your assessment results, highlighting strengths and areas for improvement';
const strengthHeading = 'Strengths';
const improvementHeading = 'Areas for Improvement';
const suggestionsHeading = 'Personalized Suggestions';
const loadingLines = 3;

const suggestions: Suggestion[] = [
  {
    title: 'Focus on CSS Flexbox and Grid layout',
    tips: [
      'Start by mastering the basics of Flexbox and Grid',
      'Create layouts that adapt to different screen sizes',
      'Understand how to align and justify elements within containers',
    ],
  },
  {
    title: 'Complete CSS challenges on CodePen',
    tips: [
      'Search for CSS challenges on CodePen and replicate them',
      'Analyze how other developers approach similar challenges',
      'Apply newly learned concepts to solve design problems',
    ],
  },
  {
    title:
      'Learn Advanced CSS Selectors and Combinators for More Precise Styling',
    tips: [
      'Use attribute selectors to style elements with specific attributes',
      'Understand pseudo-classes and pseudo-elements to target states of elements',
      'Combine multiple selectors for more specific styling rules',
    ],
  },
  {
    title:
      'In-Depth Learning of CSS Flexbox and Grid Layout Systems for Advanced Page Structuring',
    tips: [
      'Create complex layouts using both Flexbox and Grid together',
      'Understand the difference between two-dimensional (Grid) and one-dimensional (Flexbox) layouts',
      'Experiment with nested grids and responsive design',
    ],
  },
  {
    title: 'Practice creating responsive web pages',
    tips: [
      'Use media queries to adjust the layout for various devices',
      'Apply fluid layouts that adapt based on viewport size',
      'Test your pages across different screen sizes and devices',
    ],
  },
];

const strengths =
  'HTML Basics, Basic Web Design Principles, Understanding of CSS Syntax, Color Theory and Typography';

const improvements =
  'Advanced CSS, Responsive Design, CSS Flexbox and Grid Layouts, CSS Animations and Transitions';

type Suggestion = {
  title: string;
  tips: string[];
};

export type Assessment = {
  id: number;
  userId: number;
  courseId: number;
  score: number;
  total: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: Suggestion[];
};

type Props = {
  goals: Goal[];
  assessment?: Assessment;
  addGoal: (goal: string, id?: string) => void;
};

const AssessmentSummary = ({ assessment, goals, addGoal }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow px-4 py-6 mb-4 lg:px-8 lg:py-10 rounded-2xl gap-4">
      <div className="flex flex-col flex-1">
        <div>
          <h3 className="text-xl lg:text-2xl text-primary-700 font-bold mb-2">
            {heading}
          </h3>
          <p className="text-sm lg:text-base text-grey-700 font-medium">
            {subheading}
          </p>
        </div>
        <div className="my-8">
          <p className="font-semibold mb-2 text-text-2 lg:text-lg">
            {strengthHeading}
          </p>

          {!strengths ? (
            <PulsingText numLines={loadingLines} />
          ) : (
            <p className="text-sm lg:text-base font-medium text-grey-700">
              {/* {assessment.strengths.join(', ')} */}
              {strengths}
            </p>
          )}
        </div>
        <div>
          <p className="font-semibold mb-2 text-text-2 lg:text-lg">
            {improvementHeading}
          </p>
          {!improvements ? (
            <PulsingText numLines={loadingLines} />
          ) : (
            <p className="text-sm lg:text-base font-medium text-grey-700">
              {/* {assessment.weaknesses.join(', ')} */}
              {improvements}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-[#F2ECF9] py-6 px-4 lg:px-6 rounded-xl">
        <h3 className="font-semibold text-text-2 mb-2 lg:text-lg">
          {suggestionsHeading}
        </h3>
        <div className="flex flex-1 flex-col gap-3">
          {suggestions ? (
            suggestions.map((suggestion, index) => {
              const suggestionId = suggestion.title + index.toString();
              const isSelected = goals.some((goal) => goal.id === suggestionId);
              return (
                <div key={suggestionId} className="flex text-sm font-medium">
                  <p className="text-xl leading-5 mr-2">•</p>
                  <p className="flex-1 lg:text-base">{suggestion.title}</p>
                  <div
                    onClick={() => addGoal(suggestion.title, suggestionId)}
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
            })
          ) : (
            <SuggestionsSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentSummary;
