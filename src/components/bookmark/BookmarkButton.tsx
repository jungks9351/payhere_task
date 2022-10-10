import styled, { css } from 'styled-components'

import { RepoType } from 'src/type'

import CustomButton from 'component/common/CustomButton'
import BookmarkAlarm from './BookmarkAlarm'
import useModal from 'hooks/useModal'
import useIsBookmark from 'hooks/useIsBookmark'

type BookmarkType = {
  isBookmark: boolean
}

const BookmarkButton = ({ repoItemData }: { repoItemData: RepoType }) => {
  const { isVisible: Alarm, toggleModal: toggleAlaram } = useModal()
  const { isBookmark, addBookmark, removeBookmark } = useIsBookmark({
    repoItemData,
    toggleAlaram,
  })

  return (
    <>
      <ButtonWrapper isBookmark={isBookmark}>
        <CustomButton
          onClick={!isBookmark ? addBookmark : removeBookmark}
          type="button"
          title="bookmark button"
          fontSize={14}
        >
          {!isBookmark ? '북마크' : '삭제'}
        </CustomButton>
      </ButtonWrapper>
      {Alarm && <BookmarkAlarm toggleModal={toggleAlaram} />}
    </>
  )
}

const ButtonWrapper = styled.div<BookmarkType>`
  position: absolute;
  top: 8px;
  right: 8px;

  z-index: 100;

  button {
    color: #a6aab0;
    &:hover {
      color: #20c997;
      text-decoration: underline;
    }
  }
  ${({ isBookmark }) =>
    isBookmark &&
    css`
      &:hover {
        button {
          color: #ff6b6b;
        }
      }
    `};
`

export default BookmarkButton
