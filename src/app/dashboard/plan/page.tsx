'use client';
import { useEffect, useState } from 'react';

import BreadCrumb from '@/components/BreadCrumb';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import LearningObjectives, {
  LearningObjective,
} from '@/components/LearningObjectives';
import ProgressBar from '@/components/ProgressBar';
import StudyGoals from '@/components/StudyGoals';
import StudyPlanHeader from '@/components/StudyPlanHeader';
import WeeklySchedule from '@/components/WeeklySchedule';
import { useHeader } from '@/context/HeaderContext';
import { ROUTES } from '@/constants/navigation';
import { getItemFromLS } from '@/util/localStorage';
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorage';
import { useRouter } from 'next/navigation';

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: false },
  { name: 'Assessment', path: ROUTES.ASSESSMENT, isActive: false },
  { name: 'Study Goals', path: ROUTES.ASSESSMENT_GOALS, isActive: false },
  { name: 'Study Plan', path: ROUTES.STUDY_PLAN, isActive: true },
];

export type StudyPlanData = {
  startDate: string;
  endDate: string;
  goals: string[];
  weeklySchedule: { [key: string]: number };
  learningObjectives: LearningObjective[];
};

const buttonLabel = 'Next';
const currentStep = 4;
const pageTitle = 'Study Plan';

export default function Plan() {
  const [studyPlan, setStudyPlan] = useState<StudyPlanData | null>(null);
  const { setTitle } = useHeader();
  const router = useRouter();

  useEffect(() => setTitle(pageTitle), []);

  useEffect(() => {
    const studyPlan = getItemFromLS<StudyPlanData>(
      LOCAL_STORAGE_KEYS.studyPlan
    );
    if (!studyPlan) {
      router.push(ROUTES.DASHBOARD);
    }
    setStudyPlan(studyPlan);
  }, []);

  const handleNext = () => {
    router.push(ROUTES.DASHBOARD);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <BreadCrumb items={breadCrumbs} />
        <ButtonWithArrow onClick={handleNext}>{buttonLabel}</ButtonWithArrow>
      </div>
      <ProgressBar currentStep={currentStep} />
      <div className="flex flex-col bg-white px-4 py-6 lg:p-8 shadow rounded-2xl">
        <StudyPlanHeader
          startDate={studyPlan?.startDate}
          endDate={studyPlan?.endDate}
        />
        <div className="flex flex-col gap-12 lg:gap-4">
          <StudyGoals goals={studyPlan?.goals} />
          <WeeklySchedule schedule={studyPlan?.weeklySchedule} />
          <LearningObjectives objectives={studyPlan?.learningObjectives} />
        </div>
      </div>
    </div>
  );
}
