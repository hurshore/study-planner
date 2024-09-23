import Image from 'next/image';
import StudyPlanBox, { StudyBoxColOne, StudyBoxColTwo } from './StudyPlanBox';
// images
import ScheduleIcon from '@/assets/icons/schedule.svg';

const heading = 'Weekly Schedule';
const subheading = 'Based on your study days and your desired hours per week';

type Schedule = {
  [day: string]: number; // day: hours
};

type Props = {
  schedule?: Schedule;
};

const WeeklySchedule = ({ schedule }: Props) => {
  return (
    <StudyPlanBox>
      <StudyBoxColOne>
        <div className="flex items-center justify-center w-12 h-12 mb-2 border border-grey-300 rounded-lg">
          <Image src={ScheduleIcon} alt="schedule icon" className="w-6 h-6" />
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
          {schedule ? (
            Object.keys(schedule).map((day) => (
              <div key={day} className="flex items-center">
                <div className="w-4 h-4 rounded mr-2 bg-secondary-400" />
                <p className="font-medium text-sm lg:text-base text-grey-700 flex-1">
                  {day}: {schedule[day]} hours
                </p>
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

export default WeeklySchedule;
