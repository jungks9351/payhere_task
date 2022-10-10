import SearchForm from 'component/search/SearchRepoForm'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>PAYHERE TASK</Logo>
      </Link>
      {pathname === '/repo' && (
        <SearchFormWrapper>
          <SearchForm />
        </SearchFormWrapper>
      )}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 0 5vw;
`

const Logo = styled.h1`
  padding: 20px 0;
`

const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header
