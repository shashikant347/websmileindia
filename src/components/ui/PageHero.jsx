const PageHero = ({ title, highlight, subtitle, breadcrumb }) => {
  return (
    <section className="relative pt-2 pb-2 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)]/15 via-transparent to-transparent" />
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--accent-marigold-soft)]/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--accent-teal-soft)]/8 blur-3xl rounded-full" />
      </div>

      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-marigold-soft)]/25 to-transparent" />

      {/* Decorative bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-teal-soft)]/35 to-transparent" />

      <div className="container-custom relative z-10 text-center">
        {/* Breadcrumb Navigation */}
        {breadcrumb && (
          <div className="mb-2 flex items-center justify-center gap-2 text-xs">
            <a href="/" className="text-[var(--text-faint)] hover:text-[var(--accent-teal-soft)] transition-colors">Home</a>
            <span className="text-[var(--text-faint)]">/</span>
            <span className="text-[var(--text-muted)] font-medium">{breadcrumb}</span>
          </div>
        )}

        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-[var(--text-primary)] mb-1.5 leading-[1.15] tracking-tight">
          {title}{' '}
          {highlight && (
            <span className="gradient-text">
              {highlight}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs md:text-sm text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;