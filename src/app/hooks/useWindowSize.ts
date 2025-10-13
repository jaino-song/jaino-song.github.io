'use client';
import { useState, useEffect } from "react";
    
export const useWindowWidth = (): number => {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const handleResize = () => {
            setWindowSize(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};