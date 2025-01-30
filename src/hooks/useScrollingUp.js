import { useEffect, useState } from "react";
import { off, on } from "./utils";

/**
 * useScrollProgress custom react hook
 * @returns {Object} { scrollingUp: boolean, scrollPercentage: number }
 */
const useScrollProgress = () => {
    let prevScroll;
    const [scrollingUp, setScrollingUp] = useState(true);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const currScroll = window.scrollY;
        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

        // Scroll direction (up or down)
        const isScrolledUp = prevScroll > currScroll;
        setScrollingUp(isScrolledUp);

        // Scroll percentage calculation
        const percentage = Math.min((currScroll / maxScroll) * 100, 100);
        setScrollPercentage(percentage);

        prevScroll = currScroll;
    };

    useEffect(() => {
        on(window, "scroll", handleScroll, { passive: true });
        return () => {
            off(window, "scroll", handleScroll, { passive: true });
        };
    }, []);

    return { scrollingUp, scrollPercentage };
};

export default useScrollProgress;
