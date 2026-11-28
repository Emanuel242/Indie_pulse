import { useState, useEffect } from "react";
import type { Theme } from "../types";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            return localStorage.getItem("indie-pulse-theme") === "light"
                ? "light"
                : "dark";
        } catch {
            return "dark";
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("indie-pulse-theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((previous) =>
            previous === "dark" ? "light" : "dark"
        );
    }

    return { theme, toggleTheme };
}