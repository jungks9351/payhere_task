import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useLastPage = (count: number, perPage: number) => {
  const [isLastPage, setIsLastPage] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (count === 0) navigate(-1)

    setIsLastPage(count < perPage)
  }, [count, perPage, navigate])

  return isLastPage
}

export default useLastPage
