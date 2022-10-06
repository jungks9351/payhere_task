import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import RepoItem, { RepoItmeType } from 'component/repo/RepoItem'
import styled from 'styled-components'

const RepoList = () => {
  const [searchParams] = useSearchParams()
  const [repoListData, setRepoListData] = useState<RepoItmeType[]>([])

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
    <RespoListWrapper>
      {repoListData &&
        repoListData.map((repoItemData, idx) => (
          <RepoItem key={idx} repoItemData={repoItemData} />
        ))}
    </RespoListWrapper>
  )
}

const RespoListWrapper = styled.ul`
  padding: 0 5vw;
`

export default RepoList
