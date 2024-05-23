import Image from 'next/image';

import UploadBox from '@/components/UploadBox';
// images
import ArrowRight from '@/assets/icons/arrow-right.svg';
import HeaderIllustration from '@/assets/images/dashboard-home.svg';

const welcomeMessage = 'Welcome back, Tofunmi';
const addStudyGoals = 'Add study goals';
const imageAlt = 'Header illustration';
const description =
  'Get exam-ready by adding your class notes. Create and tackle questions, set your study goals, and receive a custom study schedule.';

export default function DashboardHome() {
  return (
    <>
      <div className="flex bg-primary-400 text-white rounded-2xl mb-8">
        <div className="px-8 py-10">
          <h2 className="text-2xl font-bold">{welcomeMessage}</h2>
          <p className="mt-2 text-sm font-medium">{description}</p>
          <div className="flex md:inline-flex justify-center mt-8 text-white px-6 py-3 border border-white rounded-lg cursor-pointer">
            <p className="text-sm mr-2 font-bold">{addStudyGoals}</p>
            <Image src={ArrowRight} alt="arrow right" />
          </div>
        </div>
        <Image
          src={HeaderIllustration}
          alt={imageAlt}
          className="hidden lg:flex flex-1 pt-10 pr-8 h-ful w-full"
        />
      </div>
      <UploadBox />
    </>
  );
}
