import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import CustomButton from 'component/common/CustomButton'

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

const RepoItem = ({ repoItemData }: { repoItemData: RepoItmeType }) => {
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
    <RepoItemWrapper>
      <OwnerWrapper>
        <OwnerAvatar src={repoItemData.owner.avatar_url} alt="Owner Avatar" />
        <a href={repoItemData.html_url} target="_blank" rel="noreferrer">
          <RepoName>{repoItemData.full_name}</RepoName>
        </a>
      </OwnerWrapper>

      <RepoDescription>{repoItemData.description}</RepoDescription>
      <ButtonWrapper isBookmark={isBookmark}>
        <CustomButton
          onClick={handleBookmark}
          type="button"
          title="bookmark button"
          fontSize={14}
        >
          북마크
        </CustomButton>
      </ButtonWrapper>
    </RepoItemWrapper>
  )
}

const RepoItemWrapper = styled.li`
  padding: 10px 16px;
  border-bottom: 1px solid #d0d7de;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const RepoName = styled.h3`
  color: #0969da;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
`

const RepoDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (min-width: 768px) {
    flex: 1 1 0;
    padding: 0 20px;
  }
`

const OwnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const OwnerAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
`

const ButtonWrapper = styled.div<BookmarkType>`
  padding: 10px 0;
  ${({ isBookmark }) =>
    isBookmark &&
    css`
      button {
        color: yellow;
      }
    `};
`

export default RepoItem
