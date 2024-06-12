'use client';
import { useState } from 'react';
import Image from 'next/image';

import BreadCrumb from '@/components/BreadCrumb';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import Question from '@/components/Question';
import { ROUTES } from '@/constants/navigation';
// images
import ChevronRight from '@/assets/icons/chevron-right.svg';

const questions = [
  {
    sn: 1,
    question:
      'Discuss the concept of generics in Java and how they provide type safety and code reusability.',
  },
  {
    sn: 2,
    question:
      'Explain the use of reflection in Java and how it allows for dynamic inspection and modification of classes, methods, and fields at runtime.',
  },
  {
    sn: 3,
    question:
      'Describe the different interfaces and classes in the Java Collections Framework.',
  },
  {
    sn: 4,
    question:
      'Explain the Stream API introduced in Java 8 and how it facilitates functional-style operations on collections.',
  },
  {
    sn: 5,
    question:
      'Discuss the various mechanisms for achieving concurrency in Java, including threads, executors, and synchronization.',
  },
  {
    sn: 6,
    question:
      'Describe the Java memory model and how it manages memory allocation, garbage collection, and memory leaks.',
  },
];

const breadCrumbs = [
  { name: 'Home', path: ROUTES.DASHBOARD, isActive: false },
  { name: 'Questions', path: ROUTES.QUESTIONS, isActive: true },
];

const steps = [
  'Upload file',
  'Questions',
  'Assessment',
  'Study Goals',
  'Study Plan',
];

export default function Questions() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <BreadCrumb items={breadCrumbs} />
        <Button className="flex items-center py-[9px] px-4">
          Submit
          <Image src={ChevronRight} alt="chevron-right" className="ml-1" />
        </Button>
      </div>
      <ProgressBar steps={steps} currentStep={currentStep} />
      <div className="flex flex-wrap gap-10 bg-white rounded-2xl py-10 px-4 shadow">
        {questions.map((item) => (
          <Question key={item.sn} sn={item.sn} question={item.question} />
        ))}
      </div>
    </div>
  );
}
