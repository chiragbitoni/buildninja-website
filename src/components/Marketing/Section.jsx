import styles from './Section.module.css';

const cx = (...values) => values.filter(Boolean).join(' ');

export function SectionRule({ double = false, className = '' } = {}) {
  return (
    <>
      <div className={cx(styles.rule, className)} aria-hidden="true" />
      {double ? <div className={cx(styles.rule, styles.ruleGap, className)} aria-hidden="true" /> : null}
    </>
  );
}

export function Section({
  children,
  as: Tag = 'section',
  space = 'none',
  padX = false,
  tint = false,
  markers = false,
  className = '',
  showRule = true,
  ...props
}) {
  return (
    <>
      {showRule ? <SectionRule /> : null}
      <Tag
        {...props}
        className={cx(styles.band, 'site-band', className)}
        data-band-space={space}
        data-band-pad-x={padX || undefined}
        data-band-tint={tint || undefined}
      >
        {markers ? (
          <>
            <i className={cx(styles.marker, styles.markerTopLeft)} aria-hidden="true" />
            <i className={cx(styles.marker, styles.markerTopRight)} aria-hidden="true" />
            <i className={cx(styles.marker, styles.markerBottomLeft)} aria-hidden="true" />
            <i className={cx(styles.marker, styles.markerBottomRight)} aria-hidden="true" />
          </>
        ) : null}
        {children}
      </Tag>
    </>
  );
}

export function SectionHeading({ eyebrow, title, description, as: Heading = 'h2', align = 'left' }) {
  return (
    <header className={cx(styles.heading, align === 'center' && styles.centered)}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Heading>{title}</Heading>
      {description ? <p className="section-subtitle">{description}</p> : null}
    </header>
  );
}

export function SectionGrid({ children, columns = 2, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={cx(styles.grid, className)} style={{ '--section-grid-columns': columns }}>
      {children}
    </Tag>
  );
}

export function SectionBody({ children, className = '' }) {
  return <div className={cx(styles.body, className)}>{children}</div>;
}
