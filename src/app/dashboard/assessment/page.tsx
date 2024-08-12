'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import BreadCrumb from '@/components/BreadCrumb';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import ProgressBar from '@/components/ProgressBar';
import Question, { Question as QModel } from '@/components/Question';
import { useHeader } from '@/context/HeaderContext';
import { ROUTES } from '@/constants/navigation';
import { getItemFromLS } from '@/util/localStorage';
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorage';
import { ChosenAnswer } from '../questions/page';

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: false },
  { name: 'Assessment', path: ROUTES.ASSESSMENT, isActive: true },
];

const buttonLabel = 'Next';
const currentStep = 2;
const pageTitle = 'Assessment';

export default function Assessment() {
  const [questions, setQuestions] = useState<QModel[]>([]);
  const [chosenAnswers, setChosenAnswers] = useState<ChosenAnswer[]>([]);
  const { setTitle } = useHeader();
  const router = useRouter();

  useEffect(() => setTitle(pageTitle), []);

  useEffect(() => {
    const questions = getItemFromLS<QModel[]>(LOCAL_STORAGE_KEYS.questions);
    const chosenAnswers = getItemFromLS<ChosenAnswer[]>(
      LOCAL_STORAGE_KEYS.chosenAnswers
    );
    if (!questions || !chosenAnswers) {
      router.push(ROUTES.DASHBOARD);
      return;
    }

    setQuestions(questions);
    setChosenAnswers(chosenAnswers);
  }, []);

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
      <div className="flex flex-col gap-4">
        {questions.map((item, index) => {
          const chosenAnswer = chosenAnswers.find(
            (answer) => answer.questionId === item.id
          )?.chosenAnswer;
          return (
            <Question
              key={item.id}
              question={item}
              sn={index + 1}
              chosenAnswer={chosenAnswer}
              showAnswer
            />
          );
        })}
      </div>
    </div>
  );
}
