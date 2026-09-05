const SectionTitle = ({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {tag && (
        <span className="tag-badge mb-4 inline-flex">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent-teal-soft)] to-[var(--accent-marigold-soft)] animate-pulse" />
          {tag}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[var(--text-primary)] mb-3 leading-[1.25] tracking-tight">
        {title}{' '}
        {highlight && (
          <span className="gradient-text block mt-1">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;