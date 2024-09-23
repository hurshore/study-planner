import Image from 'next/image';
import dayjs from 'dayjs';
// images
import ClockIcon from '@/assets/icons/clock.svg';
import DurationIcon from '@/assets/icons/duration.svg';
import ScheduleIcon from '@/assets/icons/schedule.svg';

const heading = 'Set study timeline';
const subheading = 'Fix dates, time and weekly schedule for your study plan';
const planDurationHeading = 'Plan Duration';
const planDurationSubheading =
  'Set the start and end dates for your study plan';
const startDateLabel = 'Start date';
const endDateLabel = 'End date';
const hoursHeading = 'Weekly Hours';
const hoursSubheading = 'Input the number of hours to study each week';
const hoursInputLabel = 'Hours per week';
const hoursPlaceholder = '01';
const scheduleHeading = 'Weekly schedule';
const scheduleSubheading = 'Select the days of the week you want to study';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

type Props = {
  selectedDays: string[];
  startDate: string;
  endDate: string;
  weeklyHours: number;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setWeeklyHours: (hours: number) => void;
  toggleDay: (day: string) => void;
};

const SetStudyTimeline = ({
  selectedDays,
  startDate,
  endDate,
  weeklyHours,
  setStartDate,
  setEndDate,
  setWeeklyHours,
  toggleDay,
}: Props) => {
  const today = dayjs().format('YYYY-MM-DD');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'startDate') {
      const newStartDate = e.target.value;
      setStartDate(newStartDate);
      // if end date is before new start date, update it
      if (dayjs(endDate).isBefore(dayjs(newStartDate))) {
        setEndDate(dayjs(newStartDate).add(1, 'day').format('YYYY-MM-DD'));
      }
    } else if (e.target.name === 'endDate') {
      const newEndDate = e.target.value;
      if (
        dayjs(newEndDate).isAfter(dayjs(startDate)) ||
        dayjs(newEndDate).isSame(dayjs(startDate))
      ) {
        setEndDate(newEndDate);
      }
    } else if (e.target.name === 'weeklyHours') {
      setWeeklyHours(Number(e.target.value));
    }
  };

  return (
    <div className="flex-1 bg-white px-4 py-10 lg:px-8 rounded-2xl shadow">
      <div className="mb-6">
        <h3 className="text-2xl text-primary-700 font-bold mb-2">{heading}</h3>
        <p className="text-grey-700 font-medium">{subheading}</p>
      </div>

      <hr className="bg-grey-300 mt-6 mb-4 lg:mt-8" />

      <div>
        <div className="mb-4">
          <Image src={DurationIcon} alt="duration icon" />
          <h4 className="text-lg text-text-2 font-semibold">
            {planDurationHeading}
          </h4>
          <p className="text-sm text-grey-700 font-medium">
            {planDurationSubheading}
          </p>
        </div>

        <div className="flex items-center gap-4 mb-2">
          <p className="text-sm text-text-2 font-medium">{startDateLabel}</p>
          <input
            name="startDate"
            type="date"
            value={startDate}
            min={today}
            onChange={handleInputChange}
            className="border border-grey-400 rounded-lg p-4 text-sm outline-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-text-2 font-medium">{endDateLabel}</p>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleInputChange}
            min={
              dayjs(startDate).isValid()
                ? dayjs(startDate).format('YYYY-MM-DD')
                : today
            }
            className="border border-grey-400 rounded-lg p-4 text-sm outline-none"
          />
        </div>
      </div>

      <hr className="bg-grey-300 my-4" />

      <div>
        <div className="mb-4">
          <Image src={ClockIcon} alt="hours icon" />
          <h4 className="text-lg text-text-2 font-semibold">{hoursHeading}</h4>
          <p className="text-sm text-grey-700 font-medium">{hoursSubheading}</p>
        </div>

        <div className="flex items-center gap-4 mb-2">
          <p className="text-sm text-text-2 font-medium">{hoursInputLabel}</p>
          <input
            type="number"
            name="weeklyHours"
            min={1}
            value={weeklyHours}
            onChange={handleInputChange}
            placeholder={hoursPlaceholder}
            className="border border-grey-400 rounded-lg text-sm outline-none p-4 w-[3.875rem] h-[3.375rem] text-center"
          />
        </div>
      </div>

      <hr className="bg-grey-300 my-4" />

      <div>
        <div className="mb-4">
          <Image src={ScheduleIcon} alt="schedule icon" />
          <h4 className="text-lg text-text-2 font-semibold">
            {scheduleHeading}
          </h4>
          <p className="text-sm text-grey-700 font-medium">
            {scheduleSubheading}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {days.map((day) => {
            const isSelected = selectedDays.includes(day);
            const bg = isSelected ? 'bg-primary-400' : 'bg-white';
            const textColor = isSelected ? 'text-white' : 'text-grey-900';
            return (
              <div
                key={day}
                onClick={() => toggleDay(day)}
                className={`flex basis-[calc(50%-0.5rem)] lg:basis-[calc((100%-2rem)/3)] items-center justify-center px-2 py-2 border border-grey-400 rounded-lg cursor-pointer ${bg}`}
              >
                <p
                  className={`text-xs text-grey-900 text-center font-semibold ${textColor}`}
                >
                  {day}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetStudyTimeline;
