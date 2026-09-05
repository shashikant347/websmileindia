import { Link } from 'react-router-dom';

const GlowButton = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}) => {
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'bg-transparent text-[var(--accent-teal-soft)] hover:text-[var(--text-primary)] border border-[var(--accent-teal-soft)]/30 hover:border-[var(--accent-teal-soft)] transition-all duration-300 rounded-full font-semibold',
  };

  const cls = `${variants[variant]} ${sizes[size]} ${className} inline-flex items-center gap-2`;

  if (to) return <Link to={to} className={cls} {...props}>{icon}{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>{icon}{children}</a>;
  return <button onClick={onClick} className={cls} {...props}>{icon}{children}</button>;
};

export default GlowButton;