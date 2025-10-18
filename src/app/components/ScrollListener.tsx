'use client';
import { useEffect } from "react";
import { useScrollStore } from "@/store/useScrollStore";

export const ScrollListener = () => {
    const setIsScrolled = useScrollStore(state => state.setIsScrolled);

    useEffect(() => {
        let rafId: number | null = null;
        let lastY = 0;

        const handleScroll = () => {
            lastY = window.scrollY;
            if (rafId === null) {
                rafId = requestAnimationFrame(() => {
                    const value = Math.round((lastY / 100) * 100) / 100; // 2 decimal places
                    setIsScrolled(value);
                    rafId = null;
                });
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, [setIsScrolled]);

    return null;
};