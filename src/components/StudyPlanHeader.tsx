import dayjs from 'dayjs';

const heading = 'Personalized Study Plan';

type Props = {
  startDate?: string;
  endDate?: string;
};

const StudyPlanHeader = ({ startDate, endDate }: Props) => {
  function generateStudyPlanString(props: Props): string {
    const start = props.startDate ? dayjs(props.startDate) : dayjs();
    const end = props.endDate ? dayjs(props.endDate) : start.add(3, 'week');

    const formattedStart = start.format('MMMM D, YYYY');
    const formattedEnd = end.format('MMMM D, YYYY');

    const weeksDiff = end.diff(start, 'week', true);
    const roundedWeeks = Math.round(weeksDiff);
    const durationText = roundedWeeks === 1 ? '1-week' : `${roundedWeeks}-week`;

    return `Your detailed ${durationText} study plan from ${formattedStart}, to ${formattedEnd}; created to provide a strategic path to your educational goals`;
  }

  const message = generateStudyPlanString({ startDate, endDate });

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
