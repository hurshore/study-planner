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
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <p
            onClick={() => handleClick(item.path)}
            className={`cursor-pointer ${
              item.isActive ? colorVariants.active : ''
            }`}
          >
            {item.name}
          </p>
          {index < items.length - 1 && <p>{'>'}</p>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
