import { FormEvent } from 'react'
import styled from 'styled-components'

import CustomButton from 'component/common/CustomButton'
import CustomInput from 'component/common/CustomInput'
import { useNavigate } from 'react-router-dom'
import useInputValue from 'hooks/useInputValue'

const SearchForm = () => {
  const navigate = useNavigate()
  const { value: search, handleChangeValue: handleChangeSearch } =
    useInputValue()

  const handleSubmitSearchFrom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/repo?q=${search}`)
  }

  return (
    <SearchFormWrapper onSubmit={handleSubmitSearchFrom}>
      <SearchFormField>
        <CustomInput
          id="search"
          type="text"
          autoComplete="off"
          placeholder="Repository 이름을 입력해주세요"
          onChange={handleChangeSearch}
          width={300}
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
    </SearchFormWrapper>
  )
}

const SearchFormWrapper = styled.form`
  width: 350px;

  box-shadow: 0 1px 6px 0 #a6aab0;
  border-radius: 20px;

  @media screen and (min-width: 760px) {
    width: 500px;
  }
`

const SearchFormField = styled.div`
  margin: 4px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export default SearchForm
