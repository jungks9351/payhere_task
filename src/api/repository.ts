export const serachRespository = async (q: string | null, page: number) => {
  const token = process.env.REACT_APP_GITHUB_TOKEN

  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${q}&sort=starts&order=desc&per_page=10&page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const searchData = await res.json()
    return searchData
  } catch (err) {
    throw new Error('serachRespository API Error')
  }
}
