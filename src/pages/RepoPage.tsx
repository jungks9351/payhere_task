import Header from 'component/common/Header'
import Layout from 'component/common/Layout'
import Footer from 'component/common/Footer'
import RepoContainer from 'component/repository/RepoContainer'
import { BookmarkProvider } from 'context/BookmarkContext'

const RepoPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <BookmarkProvider>
          <RepoContainer />
        </BookmarkProvider>
      </Layout>
      <Footer />
    </>
  )
}

export default RepoPage
