'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import UploadImage from '@/assets/icons/upload.svg';
import { ROUTES } from '@/constants/navigation';

const instruction = 'Drag and drop to upload';
const fileType = 'Only PDF format is supported';
const fileLimit = 'up to 10MB';
const buttonLabel = 'Upload';

const UploadBox = () => {
  const router = useRouter();
  const handleUpload = () => {
    router.push(ROUTES.QUESTIONS);
  };

  return (
    <div className="bg-gray-100 border-2 border-dashed border-primary-100 rounded-2xl p-10 text-center max-w-[500px] m-auto">
      <Image src={UploadImage} alt="upload" className="mb-10 m-auto" />
      <p className="hidden lg:block font-medium">{instruction}</p>
      <button
        className="mt-4 font-semibold bg-primary-400 rounded-lg text-white px-6 py-3 min-w-[200px]"
        onClick={handleUpload}
      >
        {buttonLabel}
      </button>
      <p className="mt-2 mb-10 text-primary-300 font-medium text-sm">
        {fileLimit}
      </p>
      <p className="text-grey-600 text-sm font-medium">{fileType}</p>
    </div>
  );
};

export default UploadBox;
