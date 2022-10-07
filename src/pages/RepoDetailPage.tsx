import IssueList from 'component/repo/IssueList'

export type IssueType = {
  title: string
  html_url: string
  repository_url: string
  user: {
    login: string
    avatart_url: string
  }
}

const RepoDetailPage = () => {
  return (
    <>
      <IssueList />
    </>
  )
}

export default RepoDetailPage
