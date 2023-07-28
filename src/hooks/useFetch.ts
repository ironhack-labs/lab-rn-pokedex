// src/hooks/useFetch.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface FetchData {
  data: any;
  loading: boolean;
}

const useFetch = (url: string): FetchData => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
