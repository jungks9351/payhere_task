import styled from 'styled-components'

import { BookmarkProvider } from 'context/BookmarkContext'

import BookmarkList from 'component/bookmark/BookmarkList'

const BookmarkContainer = () => {
  return (
    <BookmarkProvider>
      <BookmarkContainerWrapper>
        <BookmarkList />
      </BookmarkContainerWrapper>
    </BookmarkProvider>
  )
}

const BookmarkContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 30px 0;
`

export default BookmarkContainer
