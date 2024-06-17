'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import useBooleanState from '@/hooks/useBooleanState';
import { HeaderProvider, useHeader } from '@/context/HeaderContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, , , toggleSidebar] = useBooleanState(false);

  return (
    <HeaderProvider>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <HeaderWrapper toggleSidebar={toggleSidebar} />
          <main className="min-h-screen p-4 md:px-10 md:py-8 md:ml-[273px] bg-grey-100">
            {children}
          </main>
        </div>
      </div>
    </HeaderProvider>
  );
}

function HeaderWrapper({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { title } = useHeader();
  return <Header toggleSidebar={toggleSidebar} title={title} />;
}
