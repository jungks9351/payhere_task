import styled from 'styled-components'

type IssueTitleProps = {
  children: string
}

const IssueTitle = ({ children }: IssueTitleProps) => {
  return <IssueTitleWrapper>{children}</IssueTitleWrapper>
}

const IssueTitleWrapper = styled.h4`
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`

export default IssueTitle
