import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { RepoType } from 'src/type'

import { serachRespository } from 'api/repository'

const useRepoList = () => {
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [repoListData, setRepoListData] = useState<RepoType[]>([])
  const [pageNum, setPageNum] = useState(1)

  const search = searchParams.get('q')
  const page = searchParams.get('page')

  useEffect(() => {
    const fetchRepoList = async () => {
      setLoading(true)
      try {
        const searchData = await serachRespository(search, pageNum)
        setLoading(false)
        setRepoListData(searchData.items)
      } catch (err) {
        setLoading(true)
        throw new Error('serachRespository API Error')
      }
    }

    fetchRepoList()
  }, [search, pageNum])

  useEffect(() => {
    if (page) {
      setPageNum(parseInt(page))
    }
  }, [page])

  return { loading, repoListData, search }
}

export default useRepoList
