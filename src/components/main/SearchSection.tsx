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
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchSectionTitle = styled.h2`
  padding-bottom: 40px;

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export default SearchSection
