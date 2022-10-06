import { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'

import CustomButton from 'component/common/CustomButton'
import CustomInput from 'component/common/CustomInput'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSearch(newValue)
  }

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
    </SearchFormWrapper>
  )
}

const SearchFormWrapper = styled.form`
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

export default SearchForm
