import styled from 'styled-components'

import BookmarkList from './BookmarkList'
import { BookmarkProvider } from 'context/BookmarkContext'

const BookmarkSection = () => {
  return (
    <BookmarkSectionWrapper>
      <SectionTitle>내가 자주가는 GitHub Public Repository</SectionTitle>
      <BookmarkProvider>
        <BookmarkList />
      </BookmarkProvider>
    </BookmarkSectionWrapper>
  )
}

const BookmarkSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionTitle = styled.h2`
  text-align: center;
`

export default BookmarkSection
