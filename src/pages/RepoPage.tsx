import Header from 'component/common/Header'
import Layout from 'component/common/Layout'
import Footer from 'component/common/Footer'
import RepoContainer from 'component/repository/RepoContainer'
import { BookmarkProvider } from 'context/BookmarkContext'
import Main from 'component/common/Main'

const RepoPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <BookmarkProvider>
          <RepoContainer />
        </BookmarkProvider>
      </Main>
      <Footer />
    </Layout>
  )
}

export default RepoPage
