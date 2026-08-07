"use client";

import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();

  return (
    <button
      onClick={() => {
        if (pathname !== "/") {
          router.push("/");
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="text-2xl font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity cursor-pointer"
      aria-label="DevTech home"
    >
      DevTech<span className="text-primary">.</span>
    </button>
  );
}
