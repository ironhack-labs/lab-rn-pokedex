import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseFetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(url: string, options?: AxiosRequestConfig): UseFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url, options);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);
  console.log('data:', data);
  return { data, loading, error };
};

export default useFetch;
