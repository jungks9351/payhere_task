import { useEffect } from 'react'
import styled from 'styled-components'

import useBookmarksState from 'hooks/useBookmarksState'
import useBookmarksDispatch from 'hooks/useBookmarksDispatch'

import BookmarkItem from './BookmarkItem'
import NoBookmarkList from './NoBookmarkList'

const BookmarkList = () => {
  const bookmarks = useBookmarksState()
  const dispatch = useBookmarksDispatch()

  useEffect(() => {
    const bookmarksData = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    dispatch({ type: 'updateBookmark', payload: bookmarksData })
  }, [dispatch])

  return (
    <>
      <BookmarkListTitle>북마크 {`${bookmarks.length}/4`}</BookmarkListTitle>
      {bookmarks.length !== 0 ? (
        <>
          <BookmarkListWrapper>
            {bookmarks.map((bookmark, idx) => (
              <BookmarkItem key={idx} bookmarkData={bookmark} />
            ))}
          </BookmarkListWrapper>
        </>
      ) : (
        <NoBookmarkList />
      )}
    </>
  )
}

const BookmarkListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const BookmarkListTitle = styled.h2`
  text-align: center;
  padding: 30px 0;

  letter-spacing: 1px;
`

export default BookmarkList
