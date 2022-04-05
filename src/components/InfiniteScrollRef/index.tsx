import React, { useState, useRef, useCallback } from "react";
import useSearchBook from "./useSearchBook";

export default function InfiniteScrollRef() {
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, error, books, hasMore } = useSearchBook(query, pageNum);

  console.log("render");
  const observer: any = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      console.log("node", node);
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log("entries", entries);
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    setPageNum(1);
  };

  return (
    <div className="main">
      <h1>Search Book</h1>
      <input type="text" onChange={handleChange} value={query} />
      {books.map((book, i) => {
        if (books.length === i + 1) {
          return (
            <div key={i} ref={lastBookElementRef}>
              {book}
            </div>
          );
        } else {
          return <div key={i}>{book}</div>;
        }
      })}
      <div>{isLoading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </div>
  );
}
