import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useDataFetcher = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        if (response.status !== 200) {
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {};
  }, [url]);

  return { data, loading, error };
};

export default useDataFetcher;
