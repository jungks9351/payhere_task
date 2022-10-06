import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const RepoList = () => {
  const [searchParams] = useSearchParams()
  const [repoListData, setRepoListData] = useState([])

  useEffect(() => {
    const fetchRepoList = async () => {
      const q = searchParams.get('q')
      const token = process.env.REACT_APP_GITHUB_TOKEN

      const res = await fetch(
        `https://api.github.com/search/repositories?q=${q}&sort=starts&order=desc&page=1`,
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
    <ul>
      {repoListData &&
        repoListData.map((repoItemData: { name: string }, idx: number) => (
          <li key={idx}>{repoItemData.name}</li>
        ))}
    </ul>
  )
}

export default RepoList
