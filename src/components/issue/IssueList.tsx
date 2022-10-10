import Pagination from 'component/common/Pagination'
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { IssueType } from 'src/type'
import { getRepositoryIssues } from 'src/api/issue'

import IssueItem from 'component/issue/IssueItem'
import Loading from 'component/common/Loading'
import useLastPage from 'hooks/useLastPage'

const IssueList = () => {
  const [searchParams] = useSearchParams()
  const [issueListData, setIssueListData] = useState<IssueType[]>([])
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const isLastPage = useLastPage(issueListData.length, 10)

  const { pathname } = useLocation()
  const owner = pathname.split('/')[2]
  const name = pathname.split('/')[3]
  const page = searchParams.get('page')

  useEffect(() => {
    if (page) {
      setPageNum(parseInt(page))
    }
  }, [page])

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

  return (
    <>
      {!loading ? (
        <>
          <IssueListTitle>{`${owner}/${name} Issue`}</IssueListTitle>
          <IssueListWrapper>
            {issueListData.map((issue, idx) => (
              <IssueItem key={idx} issueData={issue} />
            ))}
          </IssueListWrapper>
          <Pagination isLastPage={isLastPage} />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

const IssueListWrapper = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-bottom: 30px;
`

const IssueListTitle = styled.h2`
  padding: 30px 0;

  text-align: center;
`

export default IssueList
