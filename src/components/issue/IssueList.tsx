import Pagination from 'component/common/Pagination'
import styled from 'styled-components'

import IssueItem from 'component/issue/IssueItem'
import Loading from 'component/common/Loading'

import usePagination from 'hooks/usePagination'
import useIssueList from 'hooks/useIssueList'

const IssueList = () => {
  const { loading, issueListData, owner, name } = useIssueList()

  const { isLastPage } = usePagination(issueListData.length, 10)

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
