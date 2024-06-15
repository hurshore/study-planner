import Image from 'next/image';
import { usePathname } from 'next/navigation';

import GoalIcon from './GoalIcon';
import HomeIcon from './HomeIcon';
import NavLink from './NavLink';
import { ROUTES } from '@/constants/navigation';
// images
import LogoLight from '@/assets/images/logo-light.svg';

type Props = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const links = [
  { name: 'Home', href: ROUTES.DASHBOARD, icon: HomeIcon },
  { name: 'Study Goals', href: ROUTES.GOALS, icon: GoalIcon },
];

const Sidebar = ({}: Props) => {
  const pathname = usePathname();

  const colorVariants = {
    primary: 'fill-primary-400',
    white: 'fill-white',
  };

  return (
    <div className="hidden fixed bg-primary-400 text-white w-[273px] min-h-screen py-8 pl-8 md:block">
      <Image src={LogoLight} alt="logo" />
      <nav className="mt-20">
        {links.map((Link) => {
          const isActive =
            Link.href === ROUTES.GOALS
              ? pathname === ROUTES.GOALS
              : pathname !== ROUTES.GOALS;
          const className = isActive
            ? colorVariants.primary
            : colorVariants.white;

          return (
            <NavLink
              key={Link.name}
              href={Link.href}
              isActive={isActive}
              icon={<Link.icon className={className} />}
            >
              {Link.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
