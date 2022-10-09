import styled from 'styled-components'

import RepoName from 'component/repo/RepoName'
import RepoDescription from 'component/repo/RepoDescription'
import RepoOwnerAvatar from 'component/repo/RepoOwnerAvatar'
import BookmarkButton from 'component/bookmark/BookmarkButton'
import { RepoType } from 'src/type'

export type BookmarkType = {
  isBookmark: boolean
}

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

  padding: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
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
