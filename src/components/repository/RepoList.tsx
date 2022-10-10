import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { RepoType } from 'src/type'
import { serachRespository } from 'src/api/repository'

import RepoItem from 'component/repository/RepoItem'
import Pagination from 'component/common/Pagination'
import Loading from 'component/common/Loading'

import usePagination from 'hooks/usePagination'

const RepoList = () => {
  const [searchParams] = useSearchParams()
  const [repoListData, setRepoListData] = useState<RepoType[]>([])
  const [loading, setLoading] = useState(false)
  const { isLastPage, pageNum } = usePagination(repoListData.length, 10)

  useEffect(() => {
    const fetchRepoList = async () => {
      const q = searchParams.get('q')
      setLoading(true)
      try {
        const searchData = await serachRespository(q, pageNum)
        setLoading(false)
        setRepoListData(searchData.items)
      } catch (err) {
        setLoading(true)
        throw new Error('serachRespository API Error')
      }
    }

    fetchRepoList()
  }, [searchParams, pageNum])

  return (
    <>
      {!loading ? (
        <>
          <RespoListTitle>{`"${searchParams.get(
            'q',
          )}" 검색 결과`}</RespoListTitle>
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
