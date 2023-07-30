import axios from 'axios';
import { useEffect, useState } from 'react';

const UseFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, loading, error};
};

export default UseFetch;
