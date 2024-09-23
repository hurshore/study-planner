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

const questions: QModel[] = [
  {
    id: 1,
    courseId: 101, // Same courseId for all questions
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Sheets',
    ],
    answer: 2,
    topic: 'CSS Basics',
    difficultyLevel: 1,
  },
  {
    id: 2,
    courseId: 101,
    question:
      'Where in an HTML document is the correct place to refer to an external style sheet?',
    options: [
      'In the <head> section',
      'At the end of the document',
      'In the <body> section',
      'In the <footer> section',
    ],
    answer: 0,
    topic: 'HTML and CSS Integration',
    difficultyLevel: 2,
  },
  {
    id: 3,
    courseId: 101,
    question: 'Which HTML tag is used to define an internal style sheet?',
    options: ['<style>', '<script>', '<head>', '<css>'],
    answer: 0,
    topic: 'HTML Tags',
    difficultyLevel: 1,
  },
  {
    id: 4,
    courseId: 101,
    question: 'Which is the correct CSS syntax?',
    options: [
      '{body:color=black;}',
      'body:color=black;',
      '{body;color:black;}',
      'body {color: black;}',
    ],
    answer: 3,
    topic: 'CSS Syntax',
    difficultyLevel: 2,
  },
  {
    id: 5,
    courseId: 101,
    question: 'How do you insert a comment in a CSS file?',
    options: [
      '// this is a comment //',
      '/* this is a comment */',
      '// this is a comment',
      '<!-- this is a comment -->',
    ],
    answer: 1,
    topic: 'CSS Comments',
    difficultyLevel: 1,
  },
  {
    id: 6,
    courseId: 101,
    question: 'Which property is used to change the background color in CSS?',
    options: ['color', 'background-color', 'bgcolor', 'background'],
    answer: 1,
    topic: 'CSS Properties',
    difficultyLevel: 1,
  },
  {
    id: 7,
    courseId: 101,
    question: 'How do you make text bold in CSS?',
    options: [
      'font-weight: bold;',
      'text-decoration: bold;',
      'font-style: bold;',
      'text-weight: bold;',
    ],
    answer: 0,
    topic: 'Text Formatting in CSS',
    difficultyLevel: 1,
  },
  {
    id: 8,
    courseId: 101,
    question: 'Which property is used to control the text size in CSS?',
    options: ['font-size', 'text-size', 'font-weight', 'text-style'],
    answer: 0,
    topic: 'CSS Properties',
    difficultyLevel: 1,
  },
  {
    id: 9,
    courseId: 101,
    question: 'Which CSS property controls the space between elements?',
    options: ['padding', 'margin', 'border-spacing', 'spacing'],
    answer: 1,
    topic: 'CSS Box Model',
    difficultyLevel: 2,
  },
  {
    id: 10,
    courseId: 101,
    question: 'How do you align text to the center in CSS?',
    options: [
      'text-align: center;',
      'align: center;',
      'vertical-align: center;',
      'text: center;',
    ],
    answer: 0,
    topic: 'Text Alignment in CSS',
    difficultyLevel: 1,
  },
];

export default function Assessment() {
  // const [questions, setQuestions] = useState<QModel[]>([]);
  const [chosenAnswers, setChosenAnswers] = useState<ChosenAnswer[]>([]);
  const { setTitle } = useHeader();
  const router = useRouter();

  useEffect(() => setTitle(pageTitle), []);

  useEffect(() => {
    const questions = getItemFromLS<QModel[]>(LOCAL_STORAGE_KEYS.questions);
    const chosenAnswers = getItemFromLS<ChosenAnswer[]>(
      LOCAL_STORAGE_KEYS.chosenAnswers
    );
    // if (!questions || !chosenAnswers) {
    //   router.push(ROUTES.DASHBOARD);
    //   return;
    // }

    // setQuestions(questions);

    if (!chosenAnswers) {
      return;
    }
    setChosenAnswers(chosenAnswers);
  }, []);

  const handleSubmit = () => {
    router.push(ROUTES.ASSESSMENT_GOALS);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8 ">
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
