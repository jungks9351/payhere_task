import CustomButton from 'component/common/CustomButton'
import { useState } from 'react'
import styled, { css } from 'styled-components'

export type RepoItmeType = {
  full_name: string
  owner: {
    avatar_url: string
  }
  description: string
  html_url: string
}

export type BookmarkType = {
  active: boolean
}

const RepoItem = ({ repoItemData }: { repoItemData: RepoItmeType }) => {
  const [active, setActive] = useState<boolean>(false)

  const handleBookmark = () => {
    setActive(!active)
  }
  return (
    <RepoItemWrapper>
      <OwnerWrapper>
        <OwnerAvatar src={repoItemData.owner.avatar_url} alt="Owner Avatar" />
        <a href={repoItemData.html_url} target="_blank" rel="noreferrer">
          <RepoName>{repoItemData.full_name}</RepoName>
        </a>
      </OwnerWrapper>

      <RepoDescription>{repoItemData.description}</RepoDescription>
      <ButtonWrapper active={active}>
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
  ${({ active }) =>
    active &&
    css`
      button {
        color: yellow;
      }
    `};
`

export default RepoItem
