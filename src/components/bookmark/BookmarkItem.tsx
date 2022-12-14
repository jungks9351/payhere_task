import styled from 'styled-components'

import { RepoType } from 'src/type'

import BookmarkButton from 'component/bookmark/BookmarkButton'
import RepoName from 'component/repository/RepoName'
import RepoOwnerAvatar from 'component/repository/RepoOwnerAvatar'
import { Link } from 'react-router-dom'

const BookmarkItem = ({ bookmarkData }: { bookmarkData: RepoType }) => {
  return (
    <BookmarkItemWrapper>
      <Link
        to={`/repo/${bookmarkData.full_name}`}
        title={`${bookmarkData.full_name}`}
      >
        <RepoInfoWrapper>
          <RepoOwnerAvatar
            src={bookmarkData.owner.avatar_url}
            width={50}
            height={50}
          />
          <RepoName fontSize={16}>{bookmarkData.full_name}</RepoName>
        </RepoInfoWrapper>
      </Link>
      <BookmarkButton repoItemData={bookmarkData} />
    </BookmarkItemWrapper>
  )
}

const BookmarkItemWrapper = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  z-index: 100;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

const RepoInfoWrapper = styled.div`
  width: 150px;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 8px;

  text-align: center;

  &:hover {
    background-color: #ecedf1;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

export default BookmarkItem
