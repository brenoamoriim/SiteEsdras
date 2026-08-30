"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo({
  src,
  poster,
  priority = false,
  className = "",
  overlayClassName = "",
}: {
  src: string;
  poster: string;
  priority?: boolean;
  className?: string;
  overlayClassName?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority) return;
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={wrapperRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {shouldLoad ? (
        <video
          className="h-full w-full object-cover saturate-125"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          aria-hidden="true"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover saturate-125"
          loading={priority ? "eager" : "lazy"}
        />
      )}
      {overlayClassName ? <div className={`absolute inset-0 ${overlayClassName}`} /> : null}
    </div>
  );
}
