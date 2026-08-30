"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoPanel({
  src,
  poster,
  className = "",
  frameClassName = "",
  showCorners = true,
  children,
}: {
  src: string;
  poster: string;
  className?: string;
  frameClassName?: string;
  showCorners?: boolean;
  children?: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative overflow-hidden rounded-[1.5rem] border border-gold/20 bg-obsidian-900 shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${frameClassName}`}
    >
      <div className={`relative ${className}`}>
        {shouldLoad ? (
          <video
            className="h-full w-full object-cover"
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      {showCorners ? (
        <>
          <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-gold/50" />
          <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-gold/50" />
          <span className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-gold/50" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-gold/50" />
        </>
      ) : null}

      {children}
    </div>
  );
}
