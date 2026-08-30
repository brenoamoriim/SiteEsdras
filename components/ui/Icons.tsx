type IconProps = { className?: string };

const base = "1.5";

export function TargetIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function BoneIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 9c-1.4 0-2.5-1.1-2.5-2.5S3.6 4 5 4s2.5 1.1 2.5 2.5c0 .6-.2 1.1-.5 1.6l9.5 9.5c.4-.3 1-.5 1.6-.5 1.4 0 2.5 1.1 2.5 2.5S19.4 22 18 22s-2.5-1.1-2.5-2.5c0-.6.2-1.1.5-1.6L6.5 8.4c-.4.3-1 .6-1.5.6Z" />
    </svg>
  );
}

export function CheckIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function ChatIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 5.5h16v11H9l-4 3.5v-3.5H4Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

export function RefreshIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12a8 8 0 0 1 13.5-5.8M20 12a8 8 0 0 1-13.5 5.8" />
      <path d="M17 3v3.5h-3.5M7 21v-3.5h3.5" />
    </svg>
  );
}

export function TrophyIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0Z" />
      <path d="M7 5H4v1a4 4 0 0 0 4 4M17 5h3v1a4 4 0 0 1-4 4" />
      <path d="M12 13v3M9 20h6M9.5 20c0-1.7.7-3 2.5-3s2.5 1.3 2.5 3" />
    </svg>
  );
}

export function MuscleIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 13c0-3 1.5-5 4-5 1 0 1.5.5 2 1 .5-1.5 1.8-3 4-3 3 0 6 2.5 6 7 0 3.5-2 6-5 6h-5c-3.5 0-6-2.7-6-6Z" />
      <path d="M8 12.5c1-1 2.5-1 3.5 0" />
    </svg>
  );
}

export function FlameIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3c1 3-3 4-3 7.5a3.5 3.5 0 0 0 7 0c0-1-.4-1.8-1-2.5.6 2-.4 3-1.5 3-1.5 0-2-1.2-1.5-2.5C11.7 6.5 12 4.5 12 3Z" />
      <path d="M8.5 13a5.5 5.5 0 1 0 10.7-1.8C18 15 15.5 17 12 17s-6-2.5-3.5-4Z" />
    </svg>
  );
}

export function PulseIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

export function SpineIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3v18" />
      <path d="M8 6h8M7.5 9.5h9M8 13h8M7.5 16.5h9M8 20h8" />
    </svg>
  );
}

export function BoltIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M13 3 5 14h5l-1 7 8-11h-5l1-7Z" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.78.46 3.45 1.28 4.9L2 22l5.2-1.36a9.96 9.96 0 0 0 4.82 1.23h.01c5.52 0 10.02-4.5 10.02-10.02C22.05 6.5 17.55 2 12.02 2Zm0 18.2c-1.5 0-2.98-.4-4.26-1.16l-.3-.18-3.09.81.82-3-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.53 3.69-8.22 8.3-8.22 2.22 0 4.3.87 5.87 2.43a8.15 8.15 0 0 1 2.43 5.8c0 4.53-3.7 8.19-8.31 8.19Zm4.53-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.8.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.36-.77-1.86-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.48-.02s-.44.06-.67.31c-.23.25-.87.86-.87 2.09s.9 2.42 1.02 2.59c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowUpIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export const iconMap = {
  target: TargetIcon,
  bone: BoneIcon,
  check: CheckIcon,
  chat: ChatIcon,
  refresh: RefreshIcon,
  trophy: TrophyIcon,
  muscle: MuscleIcon,
  flame: FlameIcon,
  pulse: PulseIcon,
  spine: SpineIcon,
  bolt: BoltIcon,
  shield: ShieldIcon,
};

export type IconKey = keyof typeof iconMap;
