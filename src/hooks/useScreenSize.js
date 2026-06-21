import { useState, useEffect } from "react";

export function useScreenSize({ debounce = 150 } = {}) {
  // Initial state 0/0 para SSR safety — se actualiza en el primer useEffect
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let timer;

    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    update(); // Sincroniza con el tamaño real al montar

    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(update, debounce);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [debounce]);

  return size;
}