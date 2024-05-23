import UploadImage from '@/assets/icons/upload.svg';
import Image from 'next/image';

const instruction = 'Drag and drop to upload';
const fileType = 'Only PDF format is supported';
const fileLimit = 'up to 10MB';
const buttonLabel = 'Upload';

const UploadBox = () => {
  return (
    <div className="bg-gray-100 border-2 border-dashed border-primary-100 rounded-2xl p-10 text-center max-w-[500px] m-auto">
      <Image src={UploadImage} alt="upload" className="mb-10 m-auto" />
      <p className="hidden lg:block">{instruction}</p>
      <button className="mt-4 font-semibold bg-primary-400 rounded-lg text-white px-6 py-3 min-w-[200px]">
        {buttonLabel}
      </button>
      <p className="mt-2 mb-10 text-primary-200 font-medium">{fileLimit}</p>
      <p className="text-grey-600 font-medium">{fileType}</p>
    </div>
  );
};

export default UploadBox;
