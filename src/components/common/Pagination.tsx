import { Link } from 'react-router-dom'
import styled from 'styled-components'

const pageNums = [1, 2, 3, 4, 5]

const Pagination = () => {
  return (
    <PaginaionWrapper>
      <PageNumsList>
        <PageNumItem>
          <StyledLink to="/">Prev</StyledLink>
        </PageNumItem>
        {pageNums.map((pageNum, idx) => (
          <PageNumItem key={idx}>
            <StyledLink to={`/`}>{pageNum}</StyledLink>
          </PageNumItem>
        ))}
        <PageNumItem>
          <StyledLink to="/">Next</StyledLink>
        </PageNumItem>
      </PageNumsList>
    </PaginaionWrapper>
  )
}

const PaginaionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageNumsList = styled.ul`
  display: flex;
  align-items: center;
`

const PageNumItem = styled.li`
  font-size: 16px;
`

const StyledLink = styled(Link)`
  display: inline-block;
  border-radius: 6px;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
  text-decoration: none;
  padding: 5px 10px;
  color: #000;

  &:hover {
    background-color: #d0d7de;
  }
`

export default Pagination
