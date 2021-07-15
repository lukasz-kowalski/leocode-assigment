import { useState, useEffect } from 'react';
import axios from 'axios';

const apiClient = axios.create({});

export const useFetch = <T>(url: string, defaultValue: T) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<T>(defaultValue);

  useEffect(() => {
    let shouldCancel = false;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data: fetchedData } = await apiClient.get(url);
        if (!shouldCancel) setData(fetchedData);
      } catch (err) {
        if (!shouldCancel) setError(err.message);
      } finally {
        if (!shouldCancel) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      shouldCancel = true;
    };
  }, [url]);

  return {
    isLoading,
    error,
    data,
  };
};
