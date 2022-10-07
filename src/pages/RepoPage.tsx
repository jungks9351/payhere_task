import RepoList from 'component/repo/RepoList'
import { BookmarkProvider } from 'context/BookmarkContext'

const RepoPage = () => {
  return (
    <>
      <BookmarkProvider>
        <RepoList />
      </BookmarkProvider>
    </>
  )
}

export default RepoPage
