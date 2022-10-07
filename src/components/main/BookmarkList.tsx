import { useEffect } from 'react'
import styled from 'styled-components'

import useBookmarksState from 'hooks/useBookmarksState'
import useBookmarksDispatch from 'hooks/useBookmarksDispatch'

import RepoItem from 'component/repo/RepoItem'
import { Link } from 'react-router-dom'

const BookmarkList = () => {
  const bookmarks = useBookmarksState()
  const dispatch = useBookmarksDispatch()

  useEffect(() => {
    const bookmarksData = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    dispatch({ type: 'updateBookmark', payload: bookmarksData })
  }, [dispatch])
  return (
    <BookmarkListWrapper>
      {bookmarks.map((bookmark, idx) => (
        <RepoItemWrapper key={idx}>
          <RepoItem repoItemData={bookmark} />
          <LinkWrapper>
            <Link to={`repo/${bookmark.full_name}`}>ISSUES 보러가기</Link>
          </LinkWrapper>
        </RepoItemWrapper>
      ))}
    </BookmarkListWrapper>
  )
}

const BookmarkListWrapper = styled.ul`
  padding: 20px 0;
`

const RepoItemWrapper = styled.li`
  border-bottom: 1px solid #d0d7de;
`

const LinkWrapper = styled.div`
  font-weight: bold;
  padding: 8px 16px;
  &:hover {
    text-decoration: underline;
  }
`

export default BookmarkList
