const heading = 'Personalized Study Plan';
const message =
  'Your detailed 3-week study plan from June 1, 2024, to June 27, 2024; created to provide a strategic path to your educational goals';

const StudyPlanHeader = () => {
  return (
    <div className="text-center p-4 mb-6 lg:mb-12 bg-primary-50 border border-primary-400 rounded-lg">
      <h3 className="font-bold text-xl lg:text-2xl text-grey-900">{heading}</h3>
      <p className="font-medium text-sm lg:text-base text-grey-700">
        {message}
      </p>
    </div>
  );
};

export default StudyPlanHeader;
