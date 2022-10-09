import styled from 'styled-components'

type IssueStateProps = {
  children: string
  state: string
}

const IssueState = ({ children, state }: IssueStateProps) => {
  return <IssueStateWrapper state={state}>{children}</IssueStateWrapper>
}

const IssueStateWrapper = styled.div<IssueStateProps>`
  font-weight: bold;
  color: ${({ state }) => (state === 'open' ? '#20c997' : '#ff6b6b')};
`

export default IssueState
