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
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 5vw;
`

export default RepoContainer
