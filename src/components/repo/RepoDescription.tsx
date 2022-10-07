import styled from 'styled-components'

type RepoDescriptionProps = {
  children: string
}

const RepoDescription = ({ children }: RepoDescriptionProps) => {
  return <RepoDescriptionWrapper>{children}</RepoDescriptionWrapper>
}

const RepoDescriptionWrapper = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    flex: 1 1 0;
    padding: 0 20px;
  }
`

export default RepoDescription
