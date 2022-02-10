import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query: any, page: any) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<any>([]);

  const sendQuery = useCallback(async () => {
    try {
      console.log("loading")
      const fakeDataUrl = `https://openlibrary.org/search.json?q=${query}&page=${page}`

      setLoading(true);
      setError(false);
      const res = await axios.get(fakeDataUrl);
      setList((prev: any) => [...prev, ...res.data.docs])
      setLoading(false);
    } catch (err: any) {
      console.log("error", err)
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;