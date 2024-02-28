import { useState, useEffect } from "react";
import axios from "axios";

const useDataFetcher = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // You can perform cleanup if needed
    };
  }, [url]);

  return { data, loading, error };
};

export default useDataFetcher;
