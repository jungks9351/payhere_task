import { useEffect } from 'react'
import styled from 'styled-components'

import useBookmarksState from 'hooks/useBookmarksState'
import useBookmarksDispatch from 'hooks/useBookmarksDispatch'

import RepoItem from 'component/repo/RepoItem'

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
        <RepoItem key={idx} repoItemData={bookmark} />
      ))}
    </BookmarkListWrapper>
  )
}

const BookmarkListWrapper = styled.ul`
  padding: 20px 0;
`

export default BookmarkList
