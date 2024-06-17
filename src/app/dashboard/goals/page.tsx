'use client';
import { useEffect } from 'react';

import { useHeader } from '@/context/HeaderContext';

const pageTitle = 'Study Goals';

export default function Goals() {
  const { setTitle } = useHeader();

  useEffect(() => setTitle(pageTitle), []);

  return <div></div>;
}
