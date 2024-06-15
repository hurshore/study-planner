'use client';
import { useRouter } from 'next/navigation';

import BreadCrumb from '@/components/BreadCrumb';
import ButtonWithArrow from '@/components/ButtonWithArrow';
import ProgressBar from '@/components/ProgressBar';
import Question, { Question as QModel } from '@/components/Question';
import { ROUTES } from '@/constants/navigation';

const questions: QModel[] = [
  {
    id: 1,
    sn: 1,
    question: 'What does CSS stand for?',
    options: [
      { id: 1, option: 'Computer Style Sheets' },
      { id: 2, option: 'Creative Style Sheets' },
      { id: 3, option: 'Cascading Style Sheets' },
      { id: 4, option: 'Colorful Style Sheets' },
    ],
    answer: 3,
  },
  {
    id: 2,
    sn: 2,
    question:
      'Where in an HTML document is the correct place to refer to an external style sheet?',
    options: [
      { id: 1, option: 'In the <head> section' },
      { id: 2, option: 'At the end of the document' },
      { id: 3, option: 'In the <body> section' },
      { id: 4, option: 'In the <footer> section' },
    ],
    answer: 1,
  },
  {
    id: 3,
    sn: 3,
    question: 'Which HTML tag is used to define an internal style sheet?',
    options: [
      { id: 1, option: '<style>' },
      { id: 2, option: '<script>' },
      { id: 3, option: '<head>' },
      { id: 4, option: '<css>' },
    ],
    answer: 1,
  },
  {
    id: 4,
    sn: 4,
    question: 'Which is the correct CSS syntax?',
    options: [
      { id: 1, option: '{body:color=black;}' },
      { id: 2, option: 'body:color=black;' },
      { id: 3, option: '{body;color:black;}' },
      { id: 4, option: 'body {color: black;}' },
    ],
    answer: 4,
  },
  {
    id: 5,
    sn: 5,
    question: 'How do you insert a comment in a CSS file?',
    options: [
      { id: 1, option: '// this is a comment //' },
      { id: 2, option: '/* this is a comment */' },
      { id: 3, option: '// this is a comment' },
      { id: 4, option: '<!-- this is a comment -->' },
    ],
    answer: 2,
  },
];

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: false },
  { name: 'Assessment', path: ROUTES.ASSESSMENT, isActive: true },
];

const buttonLabel = 'Next';
const currentStep = 2;

export default function Assessment() {
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
      <div className="flex flex-col gap-4">
        {questions.map((item) => (
          <Question key={item.sn} question={item} chosenAnswer={1} showAnswer />
        ))}
      </div>
    </div>
  );
}
