'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import useBooleanState from '@/hooks/useBooleanState';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, , , toggleSidebar] = useBooleanState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <main className="min-h-screen p-4 md:px-10 md:py-8 bg-grey-100">
          {children}
        </main>
      </div>
    </div>
  );
}
