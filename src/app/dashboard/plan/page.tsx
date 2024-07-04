'use client';
import { useEffect } from 'react';

import BreadCrumb from '@/components/BreadCrumb';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import LearningObjectives from '@/components/LearningObjectives';
import ProgressBar from '@/components/ProgressBar';
import StudyGoals from '@/components/StudyGoals';
import StudyPlanHeader from '@/components/StudyPlanHeader';
import WeeklySchedule from '@/components/WeeklySchedule';
import { useHeader } from '@/context/HeaderContext';
import { ROUTES } from '@/constants/navigation';

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: false },
  { name: 'Assessment', path: ROUTES.ASSESSMENT, isActive: false },
  { name: 'Study Goals', path: ROUTES.ASSESSMENT_GOALS, isActive: false },
  { name: 'Study Plan', path: ROUTES.STUDY_PLAN, isActive: true },
];

const buttonLabel = 'Next';
const currentStep = 4;
const pageTitle = 'Study Plan';

export default function Plan() {
  const { setTitle } = useHeader();

  useEffect(() => setTitle(pageTitle), []);

  const handleSubmit = () => {};

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <BreadCrumb items={breadCrumbs} />
        <ButtonWithArrow onClick={handleSubmit}>{buttonLabel}</ButtonWithArrow>
      </div>
      <ProgressBar currentStep={currentStep} />
      <div className="flex flex-col bg-white px-4 py-6 lg:p-8 shadow rounded-2xl">
        <StudyPlanHeader />
        <div className="flex flex-col gap-12 lg:gap-4">
          <StudyGoals />
          <WeeklySchedule />
          <LearningObjectives />
        </div>
      </div>
    </div>
  );
}
