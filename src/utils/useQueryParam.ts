import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function useQueryParam<T extends string | number>(key: string, initialValue: T): [T, (value: T) => void] {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const getValue = (): T => {
    const param = searchParams.get(key);
    if (param === null) {
      return initialValue;
    }

    if (typeof initialValue === 'number') {
      return parseInt(param, 10) as T;
    }
    return param as T;
  };

  const value = getValue();

  const setValue = useCallback(
    (newValue: T) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, newValue.toString());
      navigate({ search: newSearchParams.toString() }, { replace: false });
    },
    [key, searchParams, navigate]
  );

  return [value, setValue];
}

export default useQueryParam;