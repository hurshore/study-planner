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

const loadingMessages = [
  'Generating questions...',
  'Please wait...',
  "We're almost there...",
];

export default function Questions() {
  // const [questions, setQuestions] = useState<QModel[]>([]);
  const [chosenAnswers, setChosenAnswers] = useState<ChosenAnswer[]>([]);
  const [isLoading, startLoading, stopLoading] = useBooleanState();
  const [loadingText, setLoadingText] = useState<string>();
  const courseId = getItemFromLS<number>(LOCAL_STORAGE_KEYS.courseId);
  const initialized = useRef(false);
  const isLoadingRef = useRef(false);
  const { setTitle } = useHeader();
  const router = useRouter();

  useEffect(() => setTitle(pageTitle), []);

  // useEffect(() => {
  //   if (initialized.current) {
  //     return;
  //   }

  //   initialized.current = true;

  //   if (!courseId) {
  //     router.push(ROUTES.DASHBOARD);
  //     return;
  //   }

  //   generateQuestions(courseId);
  // }, []);

  const generateQuestions = async (courseId: number) => {
    try {
      setLoadingText('Generating questions...');
      startLoading();
      isLoadingRef.current = true;

      const interval = setInterval(() => {
        if (isLoadingRef.current) {
          const messages = loadingMessages.filter((msg) => msg !== loadingText);
          setLoadingText(messages[Math.floor(Math.random() * messages.length)]);
        }
      }, 10000);

      const response = await postData<QModel[]>(ENDPONTS.GENERATE_QUESTIONS, {
        courseId,
        numQuestions,
      });
      clearInterval(interval);
      stopLoading();

      if (!response.success) {
        toast.error(response.message);
        return;
      }

      // setQuestions(response.data);
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
    setItemInLS(LOCAL_STORAGE_KEYS.chosenAnswers, chosenAnswers);
    router.push(ROUTES.ASSESSMENT);
    return;
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

  console.log(chosenAnswers);

  return (
    <div>
      <div className="flex justify-between items-center mb-8 sticky top-0 bg-grey-100 z-10 p-2">
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
