import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import RepoItem from 'component/repo/RepoItem'
import styled from 'styled-components'
import { RepoType } from 'src/type'
import Pagination from 'component/common/Pagination'

const RepoList = () => {
  const [searchParams] = useSearchParams()
  const [repoListData, setRepoListData] = useState<RepoType[]>([])

  useEffect(() => {
    const fetchRepoList = async () => {
      const q = searchParams.get('q')
      const token = process.env.REACT_APP_GITHUB_TOKEN

      const res = await fetch(
        `https://api.github.com/search/repositories?q=${q}&sort=starts&order=desc&per_page=10&page=1`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      const data = await res.json()
      setRepoListData(data.items)
    }
    fetchRepoList()
  }, [searchParams])

  return (
    <>
      {repoListData.length !== 0 && (
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
          <Pagination />
        </>
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
