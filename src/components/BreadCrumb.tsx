'use client';
import { useRouter } from 'next/navigation';

type Item = {
  name: string;
  path: string;
  isActive: boolean;
};

type Props = {
  items: Item[];
};

const BreadCrumb = ({ items }: Props) => {
  const router = useRouter();
  const colorVariants = {
    active: 'text-primary-400',
  };

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex items-center space-x-2 text-grey-600 font-medium">
      {items.map((item, index) => {
        const isVisible = index === 0 || index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-2">
            {isVisible ? (
              <p
                onClick={() => handleClick(item.path)}
                className={`cursor-pointer ${
                  item.isActive ? colorVariants.active : ''
                }`}
              >
                {item.name}
              </p>
            ) : (
              <p className="font-medium">...</p>
            )}
            {index < items.length - 1 && <p>{'>'}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
