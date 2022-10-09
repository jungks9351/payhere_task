import Layout from 'component/common/Layout'
import RepoSection from 'component/repo/RepoSection'
import { BookmarkProvider } from 'context/BookmarkContext'

const RepoPage = () => {
  return (
    <Layout>
      <BookmarkProvider>
        <RepoSection />
      </BookmarkProvider>
    </Layout>
  )
}

export default RepoPage
