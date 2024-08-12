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

          {!assessment?.strengths ? (
            <PulsingText numLines={loadingLines} />
          ) : (
            <p className="text-sm lg:text-base font-medium text-grey-700">
              {assessment.strengths.join(', ')}
            </p>
          )}
        </div>
        <div>
          <p className="font-semibold mb-2 text-text-2 lg:text-lg">
            {improvementHeading}
          </p>
          {!assessment?.weaknesses ? (
            <PulsingText numLines={loadingLines} />
          ) : (
            <p className="text-sm lg:text-base font-medium text-grey-700">
              {assessment.weaknesses.join(', ')}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-[#F2ECF9] py-6 px-4 lg:px-6 rounded-xl">
        <h3 className="font-semibold text-text-2 mb-2 lg:text-lg">
          {suggestionsHeading}
        </h3>
        <div className="flex flex-1 flex-col gap-3">
          {assessment?.suggestions ? (
            assessment.suggestions.map((suggestion, index) => {
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
