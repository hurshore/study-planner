import Image from 'next/image';
import StudyPlanBox, { StudyBoxColOne, StudyBoxColTwo } from './StudyPlanBox';
// images
import ScheduleIcon from '@/assets/icons/schedule.svg';

type Schedule = {
  id: string;
  day: string;
  hours: number;
};

const schedule: Schedule[] = [
  { id: '1', day: 'Monday', hours: 2 },
  { id: '2', day: 'Wednesday', hours: 3 },
  { id: '3', day: 'Friday', hours: 3 },
  { id: '4', day: 'Saturday', hours: 2 },
];

const heading = 'Weekly Schedule';
const subheading = 'Based on your study days and your desired hours per week';

const WeeklySchedule = () => {
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
          {schedule.map((s) => (
            <div key={s.id} className="flex items-center">
              <div className="w-4 h-4 rounded mr-2 bg-secondary-400" />
              <p className="font-medium text-sm lg:text-base text-grey-700 flex-1">
                {s.day}: {s.hours} hours
              </p>
            </div>
          ))}
        </div>
      </StudyBoxColTwo>
    </StudyPlanBox>
  );
};

export default WeeklySchedule;
