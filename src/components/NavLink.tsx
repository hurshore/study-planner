import Link from 'next/link';

type Props = {
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const NavLink = ({ children, href, icon, isActive }: Props) => {
  const styles = {
    active: 'bg-white text-primary-400',
    inactive: 'text-white',
  };

  return (
    <Link
      href={href}
      className={`flex p-4 text-sm font-bold mb-8 rounded-tl-lg rounded-bl-lg ${
        isActive ? styles.active : styles.inactive
      }`}
    >
      {icon}
      <p className="ml-3">{children}</p>
    </Link>
  );
};

export default NavLink;
