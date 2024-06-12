import Image from 'next/image';
// images
import HamburgerIcon from '@/assets/icons/hamburger.svg';
import UserIcon from '@/assets/icons/user.svg';

type Props = {
  toggleSidebar: () => void;
};

const title = 'Home';
const hamburgerAlt = 'menu';

const Header = ({ toggleSidebar }: Props) => {
  return (
    <header className="bg-white shadow py-3.5 px-4 md:px-10 flex justify-between items-center">
      <div className="flex items-center">
        <button className="md:hidden mr-2" onClick={toggleSidebar}>
          <Image src={HamburgerIcon} alt={hamburgerAlt} />
        </button>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="bg-primary-100 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center">
        <Image src={UserIcon} alt="user image" />
      </div>
    </header>
  );
};

export default Header;
