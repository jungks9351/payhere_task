import { useEffect, useState } from 'react'
import { RepoType } from 'src/type'
import styled, { css } from 'styled-components'

import useBookmarksDispatch from 'hooks/useBookmarksDispatch'

import CustomButton from 'component/common/CustomButton'

export type BookmarkType = {
  isBookmark: boolean
}

const BookmarkButton = ({ repoItemData }: { repoItemData: RepoType }) => {
  const dispatch = useBookmarksDispatch()
  const [isBookmark, setIsBookmark] = useState(false)

  const addBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')

    if (bookmarks.length === 4 && !isBookmark) {
      alert('북마크는 4개까지만 가능합니다.')
      return
    }

    bookmarks.map((bookmark: RepoType) => {
      if (bookmark.id === repoItemData.id) setIsBookmark(true)
    })

    if (isBookmark) return

    const payload = {
      id: repoItemData.id,
      full_name: repoItemData.full_name,
      owner: {
        avatar_url: repoItemData.owner.avatar_url,
      },
      description: repoItemData.description,
      html_url: repoItemData.html_url,
    }

    setIsBookmark(true)

    bookmarks.push(payload)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    dispatch({ type: 'updateBookmark', payload: bookmarks })
  }

  const removeBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')

    const newBookmarks = bookmarks.filter(
      (bookmark: RepoType) => bookmark.id !== repoItemData.id,
    )
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
    setIsBookmark(false)
    dispatch({ type: 'updateBookmark', payload: newBookmarks })
  }

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    bookmarks.map((bookmark: RepoType) => {
      if (bookmark.id === repoItemData.id) {
        setIsBookmark(true)
      }
    })
  }, [repoItemData.id])

  return (
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