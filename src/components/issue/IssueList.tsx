import Pagination from 'component/common/Pagination'

import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { IssueType } from 'src/type'
import styled from 'styled-components'
import IssueItem from './IssueItem'

const IssueList = () => {
  const [searchParams] = useSearchParams()
  const [issueListData, setIssueListData] = useState<IssueType[]>([])
  const { pathname } = useLocation()
  const owner = pathname.split('/')[2]
  const name = pathname.split('/')[3]

  const [pageNum, setPageNum] = useState(1)
  const page = searchParams.get('page')

  useEffect(() => {
    if (page) {
      setPageNum(parseInt(page))
    }
  }, [page])

  useEffect(() => {
    const fetchRepoList = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN

      const res = await fetch(
        `https://api.github.com/repos/${owner}/${name}/issues?state=all&sort=desc&per_page=10&page=${pageNum}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      const data = await res.json()
      setIssueListData(data)
    }
    fetchRepoList()
  }, [owner, name, pageNum])

  return (
    <>
      <IssueListTitle>{`${owner}/${name} Issue`}</IssueListTitle>
      <IssueListWrapper>
        {issueListData.map((issue, idx) => (
          <IssueItem key={idx} issueData={issue} />
        ))}
      </IssueListWrapper>
      <Pagination />
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
