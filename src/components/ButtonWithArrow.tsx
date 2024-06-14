import Image from 'next/image';

import Button from './Button';
// images
import ChevronRight from '@/assets/icons/chevron-right.svg';

const ButtonWithArrow = ({
  children,
  ...otherProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button className="flex items-center py-[9px] px-4" {...otherProps}>
      {children}
      <Image src={ChevronRight} alt="chevron-right" className="ml-1" />
    </Button>
  );
};

export default ButtonWithArrow;
