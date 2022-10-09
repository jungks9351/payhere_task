import Header from 'component/common/Header'
import Layout from 'component/common/Layout'
import Footer from 'component/common/Footer'
import IssueCotainer from 'component/issue/IssueContainer'

const RepoDetailPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <IssueCotainer />
      </Layout>
      <Footer />
    </>
  )
}

export default RepoDetailPage
