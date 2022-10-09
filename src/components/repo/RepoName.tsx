import React from 'react'
import styled from 'styled-components'

type ReponameProps = {
  children: string
  fontSize: number
}

const RepoName = ({ children, fontSize }: ReponameProps) => {
  return <RepoNameWrapper fontSize={fontSize}>{children}</RepoNameWrapper>
}

const RepoNameWrapper = styled.h3<ReponameProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};

  width: 100%;

  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default RepoName
