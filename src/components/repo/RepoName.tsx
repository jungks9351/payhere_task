import React from 'react'
import styled from 'styled-components'

type ReponameProps = {
  children: string
  url: string
}

const RepoName = ({ children, url }: ReponameProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <RepoNameWrapper>{children}</RepoNameWrapper>
    </a>
  )
}

const RepoNameWrapper = styled.h3`
  cursor: pointer;
  color: #0969da;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
`

export default RepoName
