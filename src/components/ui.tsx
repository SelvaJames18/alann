import type { ReactNode } from 'react'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cx('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
}: {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5733AC]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white'

  const styles =
    variant === 'primary'
      ? 'bg-[#5733AC] text-white shadow-[0_12px_28px_rgba(87,51,172,0.25)] hover:brightness-105 active:brightness-95'
      : variant === 'secondary'
        ? 'bg-white text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-slate-50'
        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'

  const cls = cx(base, styles, className)

  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} type="button">
      {children}
    </button>
  )
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2 rounded-full bg-[#5733AC]/10 px-3 py-1 text-xs font-medium text-[#5733AC] ring-1 ring-[#5733AC]/15',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-[0.22em] text-[#5733AC]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cx(
        'rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Icon({
  name,
  className,
}: {
  name:
    | 'sparkles'
    | 'shield'
    | 'check'
    | 'search'
    | 'magic'
    | 'target'
    | 'bolt'
    | 'car'
    | 'linkedin'
    | 'instagram'
    | 'facebook'
    | 'x'
    | 'clipboard'
    | 'handshake'
  className?: string
}) {
  // Default to a compact size; override per-usage when needed.
  const common = cx('h-4 w-4 shrink-0', className)
  switch (name) {
    case 'sparkles':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2l1.4 5.1L18.5 9l-5.1 1.4L12 15.5l-1.4-5.1L5.5 9l5.1-1.9L12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M5 13l.8 2.7L8.5 16l-2.7.8L5 19.5l-.8-2.7L1.5 16l2.7-.3L5 13Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </svg>
      )
    case 'shield':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2l8 4v6c0 5-3.4 9.3-8 10-4.6-.7-8-5-8-10V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 12.3l2.2 2.2 4.8-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'check':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 7L10.5 16.5 4 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'search':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M16.5 16.5 21 21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'magic':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 20l10-10m-6 14l10-10M14 4l6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M13 5l1.2 3.7L18 10l-3.8 1.3L13 15l-1.2-3.7L8 10l3.8-1.3L13 5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </svg>
      )
    case 'target':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 20a8 8 0 1 1 8-8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 16a4 4 0 1 1 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M19 5l-7 7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'bolt':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'car':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 16l1-6 2-3h8l2 3 1 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M7 16v2m10-2v2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M5 16h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'linkedin':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6.6 8.2v9.2M6.6 5.6a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M10.3 17.4v-5.1c0-1.8 1.2-3 2.9-3 1.7 0 2.8 1.2 2.8 3v5.1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'instagram':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="4.5"
            y="4.5"
            width="15"
            height="15"
            rx="4.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" />
        </svg>
      )
    case 'facebook':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M13.2 20v-7h2.4l.5-2.9h-2.9V8.5c0-1 .4-1.8 1.8-1.8h1.3V4.2c-.2 0-.9-.2-1.9-.2-2.6 0-4.1 1.5-4.1 4.2v1.9H8v2.9h2.3v7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'x':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 5l14 14M19 5 5 19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'clipboard':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 5h6m-5-1h4a2 2 0 0 1 2 2v1H8V6a2 2 0 0 1 2-2Zm-2 3h8v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'handshake':
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8.5 10.5 11 13a2.1 2.1 0 0 0 3 0l1.5-1.5m-10 0 3.5-3.5a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 0 2.8 0l.7-.7a2 2 0 0 1 2.8 0l3.5 3.5M5 12l3.2 3.2m10.8-3.2-3.2 3.2M9.8 16.3l.8.8m2.8-1.7.9.9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

