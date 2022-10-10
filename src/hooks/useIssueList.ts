import { getRepositoryIssues } from 'api/issue'
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import { IssueType } from 'src/type'

const useIssueList = () => {
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()

  const [loading, setLoading] = useState(false)
  const [issueListData, setIssueListData] = useState<IssueType[]>([])
  const [pageNum, setPageNum] = useState(1)

  const owner = pathname.split('/')[2]
  const name = pathname.split('/')[3]
  const page = searchParams.get('page')

  useEffect(() => {
    const fetchIssueList = async () => {
      setLoading(true)
      try {
        const issueData = await getRepositoryIssues(owner, name, pageNum)
        setLoading(false)
        setIssueListData(issueData)
      } catch (err) {
        setLoading(true)
        throw new Error('getRepositoryIssues API Error')
      }
    }
    fetchIssueList()
  }, [owner, name, pageNum])

  useEffect(() => {
    if (page) {
      setPageNum(parseInt(page))
    }
  }, [page])

  return { loading, issueListData, owner, name }
}

export default useIssueList
