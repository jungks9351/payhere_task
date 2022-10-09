import styled from 'styled-components'
import RepoList from './RepoList'

const RepoSection = () => {
  return (
    <RepoSectionWrapper>
      <RepoList />
    </RepoSectionWrapper>
  )
}

const RepoSectionWrapper = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;

  /* padding: 10vw 5vw; */
`

export default RepoSection
