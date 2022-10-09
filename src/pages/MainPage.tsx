import Layout from 'component/common/Layout'
import BookmarkContainer from 'component/bookmark/BookmarkContainer'
import SearchSection from 'component/main/SearchSection'

const MainPage = () => {
  return (
    <Layout>
      <SearchSection />
      <BookmarkContainer />
    </Layout>
  )
}

export default MainPage
