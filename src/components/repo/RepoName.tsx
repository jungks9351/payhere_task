import React from 'react'
import styled from 'styled-components'

type ReponameProps = {
  children: string
}

const RepoName = ({ children }: ReponameProps) => {
  return <RepoNameWrapper>{children}</RepoNameWrapper>
}

const RepoNameWrapper = styled.h3`
  color: #0969da;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
`

export default RepoName
