import Layout from 'component/common/Layout'
import RepoContainer from 'component/repository/RepoContainer'
import { BookmarkProvider } from 'context/BookmarkContext'

const RepoPage = () => {
  return (
    <Layout>
      <BookmarkProvider>
        <RepoContainer />
      </BookmarkProvider>
    </Layout>
  )
}

export default RepoPage
