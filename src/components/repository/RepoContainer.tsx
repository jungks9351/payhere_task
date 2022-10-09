import styled from 'styled-components'
import RepoList from 'component/repository/RepoList'

const RepoContainer = () => {
  return (
    <RepoContainerWrapper>
      <RepoList />
    </RepoContainerWrapper>
  )
}

const RepoContainerWrapper = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 0 5vw;
`

export default RepoContainer
