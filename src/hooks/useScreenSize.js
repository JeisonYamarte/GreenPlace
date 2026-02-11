import { useState, useEffect } from "react";

export function useScreenSize({ debounce = 150 } = {}) {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        let timer;

        const handleResize = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            setSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }, debounce);
        };

        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timer);
        };
    }, [debounce]);

    return size;
}