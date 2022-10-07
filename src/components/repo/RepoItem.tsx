import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import RepoName from 'component/repo/RepoName'
import RepoDescription from 'component/repo/RepoDescription'
import RepoOwnerAvatar from 'component/repo/RepoOwnerAvatar'
import BookmarkButton from 'component/repo/BookmarkButton'

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
  return (
    <RepoItemWrapper>
      <InfoWrapper>
        <RepoOwnerAvatar src={repoItemData.owner.avatar_url} />
        <a href={repoItemData.html_url} target="_blank" rel="noreferrer">
          <RepoName>{repoItemData.full_name}</RepoName>
        </a>
      </InfoWrapper>
      <RepoDescription>{repoItemData.description}</RepoDescription>
      <BookmarkButton repoItemData={repoItemData} />
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

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export default RepoItem
