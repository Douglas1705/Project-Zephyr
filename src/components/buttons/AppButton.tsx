import { Link } from 'react-router-dom';

interface AppButtonProps {
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  href?: string;
  to?: string;
  className?: string;
  children?: React.ReactNode;
}

function AppButton({
  label,
  onClick,
  type = 'button',
  href,
  to,
  className = '',
  children,
}: AppButtonProps) {
  const baseClasses = 'px-4 py-2 rounded focus:outline-none';
  const combinedClasses = `${baseClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {label || children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {label || children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {label || children}
    </button>
  );
}

export default AppButton;
