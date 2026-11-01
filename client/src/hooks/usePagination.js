import { useState, useMemo } from 'react';

export function usePagination(totalItems = 0, initialLimit = 10) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(totalItems / limit)), [totalItems, limit]);

  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (p) => setPage(Math.max(1, Math.min(p, totalPages)));

  return {
    page,
    limit,
    totalPages,
    totalItems,
    setLimit,
    nextPage,
    prevPage,
    goToPage
  };
}

export default usePagination;
