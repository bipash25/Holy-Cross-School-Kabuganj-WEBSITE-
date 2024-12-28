import { createContext, useContext, useEffect, useState, useRef } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme, event?: React.MouseEvent) => void;
  themeButtonRef: React.RefObject<HTMLButtonElement>;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  themeButtonRef: { current: null },
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "hcsk-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      root.style.colorScheme = systemTheme;
      return;
    }

    root.classList.add(theme);
    root.style.colorScheme = theme;
  }, [theme]);

  const setTheme = (theme: Theme, event?: React.MouseEvent) => {
    if (event && themeButtonRef.current && circleRef.current) {
      const button = themeButtonRef.current;
      const circle = circleRef.current;
      const rect = button.getBoundingClientRect();

      // Calculate the position relative to the viewport
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Calculate the required circle size (diagonal of the viewport)
      const size =
        Math.sqrt(
          Math.pow(Math.max(x, window.innerWidth - x), 2) +
            Math.pow(Math.max(y, window.innerHeight - y), 2),
        ) * 2;

      // Position the circle centered on the button
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      // Add the new theme class immediately but with clip-path
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);

      // Start the animation
      circle.style.width = circle.style.height = "0";
      circle.style.transition = "none";

      requestAnimationFrame(() => {
        circle.style.transition = "all 600ms cubic-bezier(0.4, 0, 0.2, 1)";
        circle.style.width = circle.style.height = `${size}px`;
        circle.style.transform = "translate(-50%, -50%)";

        // After animation completes, clean up
        setTimeout(() => {
          circle.style.width = circle.style.height = "0";
          localStorage.setItem(storageKey, theme);
          setThemeState(theme);
        }, 600);
      });
    } else {
      localStorage.setItem(storageKey, theme);
      setThemeState(theme);
    }
  };

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{ theme, setTheme, themeButtonRef }}
    >
      {children}
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
          background:
            "radial-gradient(circle, transparent 0%, rgba(0,0,0,0.2) 100%)",
          mixBlendMode: "difference",
          backdropFilter: "invert(1)",
          WebkitBackdropFilter: "invert(1)",
        }}
      />
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
