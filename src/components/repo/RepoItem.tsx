import styled from 'styled-components'

import RepoName from 'component/repo/RepoName'
import RepoDescription from 'component/repo/RepoDescription'
import RepoOwnerAvatar from 'component/repo/RepoOwnerAvatar'
import BookmarkButton from 'component/repo/BookmarkButton'
import { RepoItmeType } from 'src/type'

export type BookmarkType = {
  isBookmark: boolean
}

const RepoItem = ({ repoItemData }: { repoItemData: RepoItmeType }) => {
  return (
    <RepoItemWrapper>
      <InfoWrapper>
        <RepoOwnerAvatar src={repoItemData.owner.avatar_url} />
        <RepoName url={repoItemData.html_url}>
          {repoItemData.full_name}
        </RepoName>
      </InfoWrapper>
      <RepoDescription>{repoItemData.description}</RepoDescription>
      <BookmarkButton repoItemData={repoItemData} />
    </RepoItemWrapper>
  )
}

const RepoItemWrapper = styled.div`
  padding: 10px 16px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export default RepoItem
