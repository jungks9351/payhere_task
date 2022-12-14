import styled from 'styled-components'
import IssueList from 'component/issue/IssueList'

const IssuesCotainer = () => {
  return (
    <IssuesCotainerWrapper>
      <IssueList />
    </IssuesCotainerWrapper>
  )
}

const IssuesCotainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default IssuesCotainer
