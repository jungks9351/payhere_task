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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  padding: 30px;
`

export default Header
