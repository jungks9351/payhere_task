import styled from 'styled-components'

type RepoDescriptionProps = {
  children: string
}

const RepoDescription = ({ children }: RepoDescriptionProps) => {
  return <RepoDescriptionWrapper>{children}</RepoDescriptionWrapper>
}

const RepoDescriptionWrapper = styled.h4`
  width: 100%;

  margin-right: 16px;

  line-height: 2;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default RepoDescription
