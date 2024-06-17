import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HeaderContextProps {
  title: string;
  setTitle: (title: string) => void;
}

const HeaderContext = createContext<HeaderContextProps | null>(null);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState('Default Title');
  return (
    <HeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};
