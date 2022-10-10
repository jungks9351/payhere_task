import styled from 'styled-components'

import RepoSearchForm from 'component/search/SearchRepoForm'

const SearchContainer = () => {
  return (
    <SearchContainerWrapper>
      <SearchContainerTitle>
        자주 가는 GitHub <br />
        Public Repository를 검색하세요
      </SearchContainerTitle>
      <RepoSearchForm />
    </SearchContainerWrapper>
  )
}

const SearchContainerWrapper = styled.section`
  width: 100%;
  height: 30vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchContainerTitle = styled.h2`
  padding: 30px 0;

  text-align: center;
`

export default SearchContainer
