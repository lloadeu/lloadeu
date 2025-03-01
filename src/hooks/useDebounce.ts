import { useRef, useCallback } from "react";

function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  // Inicializamos el ref en null
  const timeoutRef = useRef<number | null>(null);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}

export default useDebounce;
