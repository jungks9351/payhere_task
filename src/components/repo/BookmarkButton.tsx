import CustomButton from 'component/common/CustomButton'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

export type RepoItmeType = {
  id: number
  full_name: string
  owner: {
    avatar_url: string
  }
  description: string
  html_url: string
}

export type BookmarkType = {
  isBookmark: boolean
}

const BookmarkButton = ({ repoItemData }: { repoItemData: RepoItmeType }) => {
  const [isBookmark, setIsBookmark] = useState(false)

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')

    if (bookmarks.length === 4 && !isBookmark) {
      alert('북마크는 4개까지만 가능합니다.')
      return
    }

    if (!isBookmark) {
      setIsBookmark(!isBookmark)
    } else {
      const remove = bookmarks.filter(
        (bookmark: RepoItmeType) => bookmark.id !== repoItemData.id,
      )
      localStorage.setItem('bookmarks', JSON.stringify(remove))
      setIsBookmark(!isBookmark)
      return
    }

    bookmarks.map((bookmark: RepoItmeType) => {
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

    bookmarks.push(payload)

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    bookmarks.map((bookmark: RepoItmeType) => {
      if (bookmark.id === repoItemData.id) {
        setIsBookmark(true)
      }
    })
  }, [repoItemData.id])

  return (
    <ButtonWrapper isBookmark={isBookmark}>
      <CustomButton
        onClick={handleBookmark}
        type="button"
        title="bookmark button"
        fontSize={14}
      >
        {!isBookmark ? '추가' : '삭제'}
      </CustomButton>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div<BookmarkType>`
  padding: 10px 0;
  button {
    color: #20c997;
  }
  ${({ isBookmark }) =>
    isBookmark &&
    css`
      button {
        color: #ff6b6b;
      }
    `};
`

export default BookmarkButton
