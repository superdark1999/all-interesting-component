import React, { useState, useEffect } from "react";
import axios, {AxiosResponse} from "axios";

// interface 

function useSearchBook(query: string, pageNum: number) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [books, setBooks] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    let cancel: any;

    setIsLoading(true);
    setError(false);

    axios
      .get(`https://openlibrary.org/search.json?q=${query}&page=${pageNum}`, {
        cancelToken: new CancelToken((c) => (cancel = c))
      })
      .then((res: AxiosResponse) => {
        setBooks((prev) => {
          const arr = new Set<string>([...prev, ...res.data.docs.map((d: any) => d.title)])
          return Array.from(arr)
          // return [...new Set<string>([...prev, ...res.data.docs.map((d: any) => d.title)])];
        });
        setHasMore(res.data.docs.length > 0);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err);
      });

    return () => cancel();
  }, [query, pageNum]);

  return { isLoading, error, books, hasMore };
}

export default useSearchBook;
