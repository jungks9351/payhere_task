import Pagination from 'component/common/Pagination'
import RepoName from 'component/repo/RepoName'
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

export type IssueType = {
  title: string
  html_url: string
  repository_url: string
  user: {
    login: string
    avatart_url: string
  }
}

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
        `https://api.github.com/repos/${owner}/${name}/issues?per_page=10&page=${pageNum}`,
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
      <IssueListWrapper>
        {issueListData.map((issue, idx) => (
          <IssueItemWrapper key={idx}>
            <RepoName url={issue.repository_url}>{`${owner}/${name}`}</RepoName>
            <IssueTitle>{issue.title}</IssueTitle>
            <a href={issue.html_url}>ISSUE 자세히보기</a>
          </IssueItemWrapper>
        ))}
      </IssueListWrapper>
      <Pagination />
    </>
  )
}

const IssueListWrapper = styled.ul`
  padding: 10px 20px;
`

const IssueTitle = styled.h4`
  padding: 8px 0;
`

const IssueItemWrapper = styled.li`
  margin: 16px;
  border-bottom: 1px solid #d0d7de;
`
export default IssueList
