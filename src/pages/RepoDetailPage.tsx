import Header from 'component/common/Header'
import Layout from 'component/common/Layout'
import Footer from 'component/common/Footer'
import IssueCotainer from 'component/issue/IssueContainer'
import Main from 'component/common/Main'

const RepoDetailPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <IssueCotainer />
      </Main>
      <Footer />
    </Layout>
  )
}

export default RepoDetailPage
