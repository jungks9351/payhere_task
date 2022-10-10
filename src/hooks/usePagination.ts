import { useEffect, useState } from 'react'

const usePagination = (count: number, perPage: number) => {
  const [isLastPage, setIsLastPage] = useState(false)

  useEffect(() => {
    setIsLastPage(count < perPage)
  }, [count, perPage])

  return { isLastPage }
}

export default usePagination
