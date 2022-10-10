import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const usePagination = (count: number, perPage: number) => {
  const [isLastPage, setIsLastPage] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const page = searchParams.get('page')

  useEffect(() => {
    setIsLastPage(count < perPage)
  }, [count, perPage, navigate])

  useEffect(() => {
    if (page) {
      setPageNum(parseInt(page))
    }
  }, [page])

  return { isLastPage, pageNum }
}

export default usePagination
