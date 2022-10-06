import styled from 'styled-components'

import SearchForm from 'component/main/SearchForm'

const SearchSection = () => {
  return (
    <SearchSectionWrapper>
      <SearchSectionTitle>
        자주 가는 GitHub <br />
        Public Repository를 검색하세요
      </SearchSectionTitle>
      <SearchForm />
    </SearchSectionWrapper>
  )
}

const SearchSectionWrapper = styled.section`
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`

const SearchSectionTitle = styled.h2``

export default SearchSection
