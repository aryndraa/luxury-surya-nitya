"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LocomotiveProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (!scrollRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });
    })();

    return () => {
      scroll?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
