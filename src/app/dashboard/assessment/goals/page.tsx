'use client';
import { useRouter } from 'next/navigation';

import AssessmentSummary from '@/components/AssessmentSummary';
import BreadCrumb from '@/components/BreadCrumb';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import ProgressBar from '@/components/ProgressBar';
import SetStudyGoals from '@/components/SetStudyGoals';
import SetStudyTimeline from '@/components/SetStudyTimeline';
import { ROUTES } from '@/constants/navigation';

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: false },
  { name: 'Assessment', path: ROUTES.ASSESSMENT, isActive: true },
  { name: 'Study Goals', path: ROUTES.ASSESSMENT_GOALS, isActive: true },
];

const buttonLabel = 'Next';
const currentStep = 3;

export default function AssessmentGoals() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(ROUTES.ASSESSMENT_GOALS);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <BreadCrumb items={breadCrumbs} />
        <ButtonWithArrow onClick={handleSubmit}>{buttonLabel}</ButtonWithArrow>
      </div>
      <ProgressBar currentStep={currentStep} />
      <AssessmentSummary />
      <div className="flex flex-col lg:flex-row gap-4">
        <SetStudyGoals />
        <SetStudyTimeline />
      </div>
    </div>
  );
}
