import Layout from 'component/common/Layout'
import BookmarkSection from 'component/main/BookmarkSection'
import SearchSection from 'component/main/SearchSection'

const MainPage = () => {
  return (
    <Layout>
      <SearchSection />
      <BookmarkSection />
    </Layout>
  )
}

export default MainPage
