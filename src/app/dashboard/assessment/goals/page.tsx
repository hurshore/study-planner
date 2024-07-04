'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import AssessmentSummary from '@/components/AssessmentSummary';
import BreadCrumb from '@/components/BreadCrumb';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import ProgressBar from '@/components/ProgressBar';
import SetStudyGoals, { Goal } from '@/components/SetStudyGoals';
import SetStudyTimeline from '@/components/SetStudyTimeline';
import { useHeader } from '@/context/HeaderContext';
import { ROUTES } from '@/constants/navigation';

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: false },
  { name: 'Assessment', path: ROUTES.ASSESSMENT, isActive: false },
  { name: 'Study Goals', path: ROUTES.ASSESSMENT_GOALS, isActive: true },
];

const buttonLabel = 'Next';
const currentStep = 3;
const pageTitle = 'Study Goals';

export default function AssessmentGoals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const { setTitle } = useHeader();
  const router = useRouter();

  useEffect(() => setTitle(pageTitle), []);

  const handleSubmit = () => {
    router.push(ROUTES.STUDY_PLAN);
  };

  const addGoal = (goal: string, id?: string) => {
    if (id && goals.some((g) => g.id === id)) {
      return;
    }
    setGoals([...goals, { id: id || uuidv4(), goal }]);
  };

  const removeGoal = (id: string) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <BreadCrumb items={breadCrumbs} />
        <ButtonWithArrow onClick={handleSubmit}>{buttonLabel}</ButtonWithArrow>
      </div>
      <ProgressBar currentStep={currentStep} />
      <AssessmentSummary goals={goals} addGoal={addGoal} />
      <div className="flex flex-col lg:flex-row gap-4">
        <SetStudyGoals
          goals={goals}
          removeGoal={removeGoal}
          addGoal={addGoal}
        />
        <SetStudyTimeline />
      </div>
    </div>
  );
}
