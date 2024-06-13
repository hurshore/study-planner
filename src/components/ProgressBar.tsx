type Props = {
  steps: string[];
  currentStep: number;
};

const ProgressBar = ({ steps, currentStep }: Props) => {
  return (
    <div className="flex justify-center w-full mb-10">
      {steps.map((step, index) => {
        const dotColor =
          index <= currentStep ? 'bg-primary-400' : 'bg-grey-400';
        const barColor = index < currentStep ? 'bg-primary-400' : 'bg-grey-400';

        return (
          <div className="flex flex-col w-full">
            <p className="hidden text-center text-sm mb-2 md:block font-medium">
              {step}
            </p>
            <p className="text-center text-sm mb-2 md:hidden font-medium">
              {index + 1}
            </p>
            <div className="flex flex-row items-center flex-1">
              <div
                className={`flex-[0.5] h-1 ${
                  index > 0 ? dotColor : 'bg-transparent'
                }`}
              ></div>
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full ${dotColor}`}
              >
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-[0.5] h-1 ${barColor}`}></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
