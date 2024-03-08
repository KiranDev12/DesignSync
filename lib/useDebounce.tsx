import { useEffect, useState } from "react";

/**
 * Custom hook for debounce functionality.
 * @param value The value to be debounced.
 * @param delay The delay (in milliseconds) before the value is considered stable.
 * @returns The debounced value.
 */
export function useDebounce<T>(value: T, delay: number): T {
  /// State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    ///Set a timeout to update the debounced value after the specified delay
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    /// Clean up previous timeout
    return () => clearTimeout(timeoutId);
  }, [value, delay]); /// Re-run effect if value or delay changes

  return debouncedValue;
}
