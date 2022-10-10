import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>PAYHER TASK</h1>
      </Link>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 30px;
`

export default Header
