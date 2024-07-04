type Props = {
  children: React.ReactNode;
};

const StudyPlanBox = ({ children }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:border lg:border-grey-400 lg:rounded-lg lg:p-6">
      {children}
    </div>
  );
};

export const StudyBoxColOne = ({ children }: Props) => {
  return <div className="flex flex-col lg:flex-row lg:w-1/3">{children}</div>;
};

export const StudyBoxColTwo = ({ children }: Props) => {
  return <div className="lg:w-2/3 lg:pl-12">{children}</div>;
};

export default StudyPlanBox;
