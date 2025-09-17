"use client"
import { useEffect, useState } from "react";

export default function useBetterMediaQuery(mediaQueryString: string) {
    const [matches, setMatches] = useState<boolean | null>(null);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQueryString);
        const listener = () => setMatches(!!mediaQueryList.matches);
        listener();
        mediaQueryList.addEventListener("change", listener);
        return () => mediaQueryList.removeEventListener("change", listener);
    }, [mediaQueryString])

    return matches;
}

export function useViewportSize() {
    const isBigScreen = useBetterMediaQuery('(min-width: 1824px)')
    const isTabletOrMobile = useBetterMediaQuery('(max-width: 1224px)')
    const isPortrait = useBetterMediaQuery('(orientation: portrait)')
    const isRetina = useBetterMediaQuery('(min-resolution: 2dppx)')
    return {
        isBigScreen,
        isTabletOrMobile,
        isPortrait,
        isRetina
    }
}