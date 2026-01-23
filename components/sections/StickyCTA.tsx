"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/2348164394476"
        target="_blank"
        // className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-[0_0_30px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:bg-green-700"
      >
        <button className="rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-blue-700">
          Start Your Website →
        </button>
      </a>
    </div>
  );
}
