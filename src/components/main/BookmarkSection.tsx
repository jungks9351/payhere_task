import styled from 'styled-components'

import BookmarkList from './BookmarkList'
import { BookmarkProvider } from 'context/BookmarkContext'

const BookmarkSection = () => {
  return (
    <BookmarkSectionWrapper>
      <BookmarkProvider>
        <BookmarkList />
      </BookmarkProvider>
    </BookmarkSectionWrapper>
  )
}

const BookmarkSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 30px 0;
`

export default BookmarkSection
