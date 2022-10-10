import styled from 'styled-components'

import RepoItem from 'component/repository/RepoItem'
import Pagination from 'component/common/Pagination'
import Loading from 'component/common/Loading'

import usePagination from 'hooks/usePagination'
import useRepoList from 'hooks/useRepoList'

const RepoList = () => {
  const { loading, repoListData, search } = useRepoList()

  const { isLastPage } = usePagination(repoListData.length, 10)

  return (
    <>
      {!loading ? (
        <>
          <RespoListTitle>{`"${search}" 검색 결과`}</RespoListTitle>
          <RespoListWrapper>
            {repoListData &&
              repoListData.map((repoItemData, idx) => (
                <RepoItem key={idx} repoItemData={repoItemData} />
              ))}
          </RespoListWrapper>
          <Pagination isLastPage={isLastPage} />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

const RespoListWrapper = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 30px;
`

const RespoListTitle = styled.h2`
  padding: 30px 0;

  text-align: center;
`
export default RepoList
