import { useEffect, useState } from 'react'
import { RepoType } from 'src/type'
import styled, { css } from 'styled-components'

import useBookmarksDispatch from 'hooks/useBookmarksDispatch'

import CustomButton from 'component/common/CustomButton'
import BookmarkAlarm from './BookmarkAlarm'
import useModal from 'hooks/useModal'

type BookmarkType = {
  isBookmark: boolean
}

const BookmarkButton = ({ repoItemData }: { repoItemData: RepoType }) => {
  const dispatch = useBookmarksDispatch()
  const [isBookmark, setIsBookmark] = useState(false)

  const { isVisible: Alarm, toggleModal: toggleAlaram } = useModal()

  const addBookmark = () => {
    const bookmarkData = JSON.parse(localStorage.getItem('bookmarks') || '[]')

    if (bookmarkData.length === 4 && !isBookmark) {
      toggleAlaram()
      return
    }

    const payload = {
      id: repoItemData.id,
      full_name: repoItemData.full_name,
      owner: {
        avatar_url: repoItemData.owner.avatar_url,
      },
      description: repoItemData.description,
      html_url: repoItemData.html_url,
    }

    bookmarkData.push(payload)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkData))

    dispatch({ type: 'createBookmark', bookmark: payload })

    setIsBookmark(true)
  }

  const removeBookmark = () => {
    const bookmarkData = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    const newBookmarks = bookmarkData.filter(
      (bookmark: RepoType) => bookmark.id !== repoItemData.id,
    )
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))

    dispatch({ type: 'removeBookmark', id: repoItemData.id })

    setIsBookmark(false)
  }

  useEffect(() => {
    const bookmarkData = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    bookmarkData.map((bookmark: RepoType) => {
      if (bookmark.id === repoItemData.id) {
        setIsBookmark(true)
      }
    })
    dispatch({ type: 'updateBookmark', payload: bookmarkData })
  }, [repoItemData.id, dispatch])

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
