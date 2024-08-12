'use client';

import React from 'react';

interface FullScreenLoaderProps {
  isLoading: boolean;
  loadingText?: string;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  isLoading,
  loadingText = 'Loading...',
}) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-400"></div>
      <p className="mt-4 text-white font-semibold">{loadingText}</p>
    </div>
  );
};

export default FullScreenLoader;
