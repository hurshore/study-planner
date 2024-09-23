'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import AssessmentSummary, { Assessment } from '@/components/AssessmentSummary';
import BreadCrumb from '@/components/BreadCrumb';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import FullScreenLoader from '@/components/FullScreenLoader';
import ProgressBar from '@/components/ProgressBar';
import SetStudyGoals, { Goal } from '@/components/SetStudyGoals';
import SetStudyTimeline from '@/components/SetStudyTimeline';
import useBooleanState from '@/hooks/useBooleanState';
import { getItemFromLS, setItemInLS } from '@/util/localStorage';
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorage';
import { useHeader } from '@/context/HeaderContext';
import { fetchData, postData } from '@/api/axios';
import { ROUTES } from '@/constants/navigation';
import { ENDPONTS } from '@/api/constants';
import { StudyPlanData } from '../../plan/page';

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: false },
  { name: 'Assessment', path: ROUTES.ASSESSMENT, isActive: false },
  { name: 'Study Goals', path: ROUTES.ASSESSMENT_GOALS, isActive: true },
];

const buttonLabel = 'Next';
const currentStep = 3;
const pageTitle = 'Study Goals';
const submittingText = 'Generating Study Plan...';

export default function AssessmentGoals() {
  const [, startLoading, stopLoading] = useBooleanState();
  const [isSubmitting, startSubmitting, stopSubmitting] = useBooleanState();
  const [assessment, setAssessment] = useState<Assessment>();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [weeklyHours, setWeeklyHours] = useState<number>(0);
  const [goals, setGoals] = useState<Goal[]>([]);
  const { setTitle } = useHeader();
  const router = useRouter();
  const assessmentId = getItemFromLS<number>(LOCAL_STORAGE_KEYS.assessmentId);

  useEffect(() => setTitle(pageTitle), []);

  // useEffect(() => {
  //   if (!assessmentId) {
  //     router.push(ROUTES.DASHBOARD);
  //     return;
  //   }

  //   generateAssessment(assessmentId);
  // }, []);

  const generateAssessment = async (assessmentId: number) => {
    try {
      startLoading();
      const response = await fetchData<Assessment>(
        ENDPONTS.GENERATE_ASSESSMENT(assessmentId)
      );
      stopLoading();

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      setAssessment(response.data);
    } catch (err) {
      stopLoading();
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    router.push(ROUTES.STUDY_PLAN);
    return;

    const data = {
      assessmentId,
      studyGoals: goals.map((goal) => goal.goal),
      startDate,
      endDate,
      weeklyHours,
      availableDays: selectedDays,
    };

    try {
      startSubmitting();
      const response = await postData<StudyPlanData>(
        ENDPONTS.GENERATE_PLAN,
        data
      );
      stopSubmitting();

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      setItemInLS(LOCAL_STORAGE_KEYS.studyPlan, response.data);
      router.push(ROUTES.STUDY_PLAN);
    } catch (err) {
      stopSubmitting();
      console.error(err);
    }
  };

  const addGoal = (goal: string, id?: string) => {
    if (id && goals.some((g) => g.id === id)) {
      return;
    }
    setGoals([...goals, { id: id || uuidv4(), goal }]);
  };

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const removeGoal = (id: string) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8 bg-grey-100 z-10 p-2">
        <BreadCrumb items={breadCrumbs} />
        <ButtonWithArrow onClick={handleSubmit}>{buttonLabel}</ButtonWithArrow>
      </div>
      <ProgressBar currentStep={currentStep} />
      <AssessmentSummary
        assessment={assessment}
        goals={goals}
        addGoal={addGoal}
      />
      <div className="flex flex-col lg:flex-row gap-4">
        <SetStudyGoals
          goals={goals}
          removeGoal={removeGoal}
          addGoal={addGoal}
        />
        <SetStudyTimeline
          selectedDays={selectedDays}
          startDate={startDate}
          endDate={endDate}
          weeklyHours={weeklyHours}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setWeeklyHours={setWeeklyHours}
          toggleDay={toggleDay}
        />
      </div>
      <FullScreenLoader isLoading={isSubmitting} loadingText={submittingText} />
    </div>
  );
}
