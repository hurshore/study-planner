'use client';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { postData } from '@/api/axios';
import UploadImage from '@/assets/icons/upload.svg';
import useBooleanState from '@/hooks/useBooleanState';
import { setItemInLS } from '@/util/localStorage';
import { ToastMessages } from '@/constants/toast';
import { ROUTES } from '@/constants/navigation';
import { ENDPONTS } from '@/api/constants';

const instruction = 'Drag and drop to upload';
const fileType = 'Only PDF format is supported';
const fileLimit = 'up to 10MB';
const buttonLabel = 'Upload';

const UploadBox = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, startLoading, stopLoading] = useBooleanState();
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { 'application/pdf': ['.pdf'] },
    noClick: true,
  });

  const handleUpload = async () => {
    router.push(ROUTES.QUESTIONS);
    return;

    if (!file) {
      open();
      return;
    }

    try {
      startLoading();
      const formData = new FormData();
      // formData.append('file', file);
      const response = await postData<{ courseId: number }>(
        ENDPONTS.FILE_UPLOAD,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      stopLoading();

      toast.success(ToastMessages.FileUploadSuccess);
      setItemInLS('courseId', response.data.courseId);
      router.push(ROUTES.QUESTIONS);
    } catch (err) {
      stopLoading();
      console.error(err);
    }
  };

  const activeDragClass = isDragActive ? 'opacity-50' : '';

  return (
    <div
      {...getRootProps()}
      className={`bg-gray-100 border-2 border-dashed border-primary-100 rounded-2xl p-10 text-center max-w-[500px] m-auto ${activeDragClass}`}
    >
      <input {...getInputProps()} />
      <Image src={UploadImage} alt="upload" className="mb-10 m-auto" />
      <p className="hidden lg:block font-medium">{instruction}</p>

      {file && (
        <p className="mt-4 font-medium text-grey-600 text-ellipsis">
          {file.name}
        </p>
      )}

      <button
        className="mt-4 font-semibold bg-primary-400 rounded-lg text-white px-6 py-3 min-w-[200px]"
        onClick={handleUpload}
      >
        {isLoading ? 'Uploading...' : buttonLabel}
      </button>

      <p className="mt-2 mb-10 text-primary-300 font-medium text-sm">
        {fileLimit}
      </p>
      <p className="text-grey-600 text-sm font-medium">{fileType}</p>
    </div>
  );
};

export default UploadBox;
