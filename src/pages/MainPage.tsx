import Header from 'component/common/Header'
import Layout from 'component/common/Layout'
import Footer from 'component/common/Footer'
import BookmarkContainer from 'component/bookmark/BookmarkContainer'
import SearchContainer from 'component/search/SearchContainer'

const MainPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <SearchContainer />
        <BookmarkContainer />
      </Layout>
      <Footer />
    </>
  )
}

export default MainPage
