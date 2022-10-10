import styled from 'styled-components'

import { RepoType } from 'src/type'

import RepoName from 'component/repository/RepoName'
import RepoDescription from 'component/repository/RepoDescription'
import RepoOwnerAvatar from 'component/repository/RepoOwnerAvatar'
import BookmarkButton from 'component/bookmark/BookmarkButton'

const RepoItem = ({ repoItemData }: { repoItemData: RepoType }) => {
  return (
    <RepoItemWrapper>
      <InfoWrapper>
        <MainInfoWrapper>
          <RepoOwnerAvatar
            src={repoItemData.owner.avatar_url}
            width={30}
            height={30}
          />
          <LinkWrapper
            href={repoItemData.html_url}
            title={repoItemData.html_url}
          >
            <RepoName fontSize={18}>{repoItemData.full_name}</RepoName>
          </LinkWrapper>
        </MainInfoWrapper>
        <RepoDescription>{repoItemData.description}</RepoDescription>
      </InfoWrapper>
      <BookmarkButton repoItemData={repoItemData} />
    </RepoItemWrapper>
  )
}

const RepoItemWrapper = styled.li`
  position: relative;

  border-bottom: 1px solid #d0d7de;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px 8px 8px 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 8px;
  }
`

const MainInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const LinkWrapper = styled.a`
  color: #0969da;
  &:hover {
    text-decoration: underline;
  }
`

export default RepoItem
