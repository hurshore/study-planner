import Image from 'next/image';
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
  'Focus on CSS Flexbox and Grid layout',
  'Complete CSS challenges on CodePen',
  'Learn Advanced CSS Selectors and Combinators for More Precise Styling',
  'In-Depth Learning of CSS Flexbox and Grid Layout Systems for Advanced Page Structuring',
  'Practice creating responsive web pages',
];

const AssessmentSummary = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow px-4 py-6 mb-4 lg:px-8 lg:py-10 rounded-2xl gap-4">
      <div className="flex flex-col flex-1">
        <div>
          <h3 className="text-xl text-primary-700 font-bold mb-2">{heading}</h3>
          <p className="text-sm text-text-3 font-medium">{subheading}</p>
        </div>
        <div className="my-8">
          <p className="font-semibold mb-2 text-text-2">{strengthHeading}</p>
          <p className="text-sm font-medium text-text-3">{strengths}</p>
        </div>
        <div>
          <p className="font-semibold mb-2 text-text-2">{improvementHeading}</p>
          <p className="text-sm font-medium text-text-3">{improvements}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-[#F2ECF9] py-6 px-4 lg:px-6 rounded-xl">
        <h3 className="font-semibold text-text-2 mb-2">{suggestionsHeading}</h3>
        <div className="flex flex-col gap-3">
          {suggestions.map((suggestion) => (
            <div key={suggestion} className="flex text-sm font-medium">
              <p className="text-xl leading-5 mr-2">•</p>
              <p className="flex-1">{suggestion}</p>
              <div className="flex justify-center items-center self-center w-8 h-8 ml-4 bg-primary-400 rounded cursor-pointer">
                <Image src={PlusIcon} alt="plus icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssessmentSummary;
