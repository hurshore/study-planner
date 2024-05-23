import Link from 'next/link';

type Props = {
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const NavLink = ({ children, href, icon, isActive }: Props) => {
  const styles = {
    active: 'bg-white rounded-tl-lg rounded-bl-lg',
    inactive: 'bg-primary-400',
  };

  const textStyles = {
    active: 'text-primary-400',
    inactive: 'text-white',
  };

  return (
    <Link
      href={href}
      className={`flex p-4 text-sm font-bold ${
        isActive ? styles.active : styles.inactive
      }`}
    >
      {icon}
      <p
        className={`ml-3 ${isActive ? textStyles.active : textStyles.inactive}`}
      >
        {children}
      </p>
    </Link>
  );
};

export default NavLink;
