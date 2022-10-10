import Header from 'component/common/Header'
import Layout from 'component/common/Layout'
import Footer from 'component/common/Footer'
import BookmarkContainer from 'component/bookmark/BookmarkContainer'
import SearchContainer from 'component/search/SearchContainer'
import Main from 'component/common/Main'

const MainPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <SearchContainer />
        <BookmarkContainer />
      </Main>
      <Footer />
    </Layout>
  )
}

export default MainPage
