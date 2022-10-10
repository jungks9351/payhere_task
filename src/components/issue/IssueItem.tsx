import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { IssueType } from 'src/type'

import RepoName from 'component/repository/RepoName'
import IssueTitle from 'component/issue/IssueTitle'
import IssueState from 'component/issue/IssueState'

const IssueItem = ({ issueData }: { issueData: IssueType }) => {
  const { pathname } = useLocation()
  const owner = pathname.split('/')[2]
  const name = pathname.split('/')[3]

  return (
    <IssueItemWrapper>
      <RepoInfoWrapper>
        <a href={`https://github.com/${owner}/${name}`} title="RepoURL">
          <RepoName fontSize={18}>{`${owner}/${name}`}</RepoName>
        </a>
      </RepoInfoWrapper>
      <IssueInfoWrapper>
        <a href={issueData.html_url} title="IssueURL">
          <IssueTitle>{issueData.title}</IssueTitle>
        </a>
        <IssueState state={issueData.state}>{issueData.state}</IssueState>
      </IssueInfoWrapper>
    </IssueItemWrapper>
  )
}

const IssueItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 8px;

  border-bottom: 1px solid #d0d7de;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const RepoInfoWrapper = styled.div`
  color: #a6aab0;
`

const IssueInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`

export default React.memo(IssueItem)
