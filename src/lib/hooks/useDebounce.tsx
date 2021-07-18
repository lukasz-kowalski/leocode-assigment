import { useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';

const useDebounce = (callback: (...args: any[]) => void, timer = 300) => {
  const debouncedCallback = useMemo(
    () => debounce((...args: any[]) => callback(...args), timer),
    [callback, timer]
  );

  useEffect(() => {
    return () => {
      debouncedCallback.cancel();
    };
  }, [debouncedCallback]);

  return debouncedCallback;
};

export default useDebounce;
