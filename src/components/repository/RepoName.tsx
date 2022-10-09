import styled from 'styled-components'

type RepoNameProps = {
  children: string
  fontSize: number
}

const RepoName = ({ children, fontSize }: RepoNameProps) => {
  return <RepoNameWrapper fontSize={fontSize}>{children}</RepoNameWrapper>
}

const RepoNameWrapper = styled.h3<RepoNameProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};

  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default RepoName
