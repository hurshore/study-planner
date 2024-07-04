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
  const firstItem = items[0];
  const lastItem = items[items.length - 1];

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex items-center space-x-2 text-grey-700 font-medium">
      <div className="flex items-center space-x-2">
        <p
          onClick={() => handleClick(firstItem.path)}
          className="cursor-pointer"
        >
          {firstItem.name}
        </p>
        <p>{'>'}</p>
        {items.length > 2 && (
          <div className="flex space-x-2">
            <p>...</p>
            <p>{'>'}</p>
          </div>
        )}
        <p
          onClick={() => handleClick(lastItem.path)}
          className="cursor-pointer text-primary-400"
        >
          {lastItem.name}
        </p>
      </div>
    </div>
  );
};

export default BreadCrumb;
