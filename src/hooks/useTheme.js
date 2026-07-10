import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("tk-theme");
      if (stored === "light" || stored === "dark") return stored;
      const prefersLight = window.matchMedia?.(
        "(prefers-color-scheme: light)"
      ).matches;
      return prefersLight ? "light" : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem("tk-theme", theme);
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
