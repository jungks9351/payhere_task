import styled from 'styled-components'

import CustomButton from 'component/common/CustomButton'
import CustomInput from 'component/common/CustomInput'

const SearchSection = () => {
  return (
    <SearchSectionWrapper>
      <SearchSectionTitle>
        자주 가는 GitHub <br />
        Public Repository를 검색하세요
      </SearchSectionTitle>
      <SearchForm>
        <SearchFormField>
          <CustomInput
            id="search"
            type="text"
            autoComplete="off"
            placeholder="Repository 이름을 입력해주세요"
            width={250}
            height={30}
            fontSize={16}
          />
          <CustomButton
            type="submit"
            title="검색버튼"
            width={40}
            height={40}
            fontSize={16}
          >
            검색
          </CustomButton>
        </SearchFormField>
      </SearchForm>
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

const SearchForm = styled.form`
  display: inline-block;
  border: 1px solid #000;
  border-radius: 5px;
`

const SearchFormField = styled.div`
  margin: 4px 8px;

  display: flex;
  align-items: center;
  gap: 8px;
`

export default SearchSection
