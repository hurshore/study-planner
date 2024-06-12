type Props = {
  steps: string[];
  currentStep: number;
};

const ProgressBar = ({ steps, currentStep }: Props) => {
  return (
    <div className="flex justify-between items-center w-full max-w-4xl mx-auto mt-8">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex items-center">
          <div className="relative flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <span className="text-white">{index + 1}</span>
            </div>
            <span
              className={`mt-2 text-xs ${
                index <= currentStep ? 'text-purple-600' : 'text-gray-500'
              } md:hidden`}
            >
              {index + 1}
            </span>
            <span
              className={`mt-2 text-xs ${
                index <= currentStep ? 'text-purple-600' : 'text-gray-500'
              } hidden md:inline`}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 ${
                index < currentStep ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
