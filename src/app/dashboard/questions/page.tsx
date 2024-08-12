'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import BreadCrumb from '@/components/BreadCrumb';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import FullScreenLoader from '@/components/FullScreenLoader';
import ProgressBar from '@/components/ProgressBar';
import Question, { Question as QModel } from '@/components/Question';
import useBooleanState from '@/hooks/useBooleanState';
import { useHeader } from '@/context/HeaderContext';
import { ROUTES } from '@/constants/navigation';
import { getItemFromLS, setItemInLS } from '@/util/localStorage';
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorage';
import { ENDPONTS } from '@/api/constants';
import { postData } from '@/api/axios';

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: true },
];

const currentStep = 1;
const buttonLabel = 'Submit';
const pageTitle = 'Questions';
const numQuestions = 20;

// TODO: add type to separate file
export type ChosenAnswer = {
  questionId: number;
  chosenAnswer: number;
};

type QuizSubmissionResData = {
  id: number;
  score: number;
  total: number;
};

export default function Questions() {
  const [questions, setQuestions] = useState<QModel[]>([]);
  const [chosenAnswers, setChosenAnswers] = useState<ChosenAnswer[]>([]);
  const [isLoading, startLoading, stopLoading] = useBooleanState();
  const [loadingText, setLoadingText] = useState<string>();
  const courseId = getItemFromLS<number>(LOCAL_STORAGE_KEYS.courseId);
  const initialized = useRef(false);
  const { setTitle } = useHeader();
  const router = useRouter();

  useEffect(() => setTitle(pageTitle), []);

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;

    if (!courseId) {
      router.push(ROUTES.DASHBOARD);
      return;
    }

    generateQuestions(courseId);
  }, []);

  const generateQuestions = async (courseId: number) => {
    try {
      setLoadingText('Generating questions...');
      startLoading();
      const response = await postData<QModel[]>(ENDPONTS.GENERATE_QUESTIONS, {
        courseId,
        numQuestions,
      });
      stopLoading();

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      setQuestions(response.data);
    } catch (err) {
      stopLoading();
      console.error(err);
    }
  };

  const addAnswer = (questionId: number, chosenAnswer: number) => {
    const index = chosenAnswers.findIndex(
      (item) => item.questionId === questionId
    );
    if (index === -1) {
      setChosenAnswers([...chosenAnswers, { questionId, chosenAnswer }]);
    } else {
      const newChosenAnswers = [...chosenAnswers];
      newChosenAnswers[index].chosenAnswer = chosenAnswer;
      setChosenAnswers(newChosenAnswers);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoadingText('Submitting answers...');
      startLoading();
      const response = await postData<QuizSubmissionResData>(
        ENDPONTS.ASSESSMENT,
        {
          answers: chosenAnswers,
          courseId,
        }
      );
      stopLoading();

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      setItemInLS(LOCAL_STORAGE_KEYS.questions, questions);
      setItemInLS(LOCAL_STORAGE_KEYS.chosenAnswers, chosenAnswers);
      setItemInLS(LOCAL_STORAGE_KEYS.assessmentId, response.data.id);
      router.push(ROUTES.ASSESSMENT);
    } catch (err) {
      stopLoading();
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <BreadCrumb items={breadCrumbs} />
        <ButtonWithArrow onClick={handleSubmit}>{buttonLabel}</ButtonWithArrow>
      </div>
      <ProgressBar currentStep={currentStep} />
      <div className="flex flex-col gap-4">
        {questions.map((item, index) => (
          <Question
            key={item.id}
            question={item}
            sn={index + 1}
            addAnswer={addAnswer}
          />
        ))}
      </div>

      <FullScreenLoader isLoading={isLoading} loadingText={loadingText} />
    </div>
  );
}
