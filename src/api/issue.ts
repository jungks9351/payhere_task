export const getRepositoryIssues = async (
  owner: string | null,
  name: string | null,
  page: number,
) => {
  const token = process.env.REACT_APP_GITHUB_TOKEN

  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${name}/issues?state=all&sort=desc&per_page=10&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const issueData = await res.json()
    return issueData
  } catch (err) {
    throw new Error('getRepositoryIssues API Error')
  }
}
