import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export const useFetch = (url: string) => {
  const cache: any = useRef({});
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState({});

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus('fetching');
      if (cache.current[url]) {
        const cachedData = cache.current[url];
        setData(cachedData);
        setStatus('fetched');
        return;
      }
      try {
        const response = await axios.get(url);
        cache.current[url] = response.data;
        setData(response.data);
        setStatus('fetched');
      } catch (e) {
        setStatus('error');
        console.error(e);
      }
    };

    fetchData();
  }, [url]);

  return { status, data };
};
