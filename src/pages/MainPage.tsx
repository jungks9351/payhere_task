import Layout from 'component/common/Layout'
import BookmarkContainer from 'component/bookmark/BookmarkContainer'
import SearchContainer from 'component/search/SearchContainer'

const MainPage = () => {
  return (
    <Layout>
      <SearchContainer />
      <BookmarkContainer />
    </Layout>
  )
}

export default MainPage
