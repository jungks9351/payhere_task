import { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const Pagination = () => {
  const { pathname } = useLocation()
  const owner = pathname.split('/')[2]
  const name = pathname.split('/')[3]

  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    if (page) {
      setPageNum(parseInt(page))
    }
  }, [page])

  return (
    <PaginaionWrapper>
      <PageNumsList>
        {pageNum !== 1 && (
          <PageNumItem>
            <StyledLink to={`/repo/${owner}/${name}?page=${pageNum - 1}`}>
              Prev
            </StyledLink>
          </PageNumItem>
        )}
        <PageNumItem>
          <StyledLink to={`/repo/${owner}/${name}?page=${pageNum}`}>
            {pageNum}
          </StyledLink>
        </PageNumItem>
        <PageNumItem>
          <StyledLink to={`/repo/${owner}/${name}?page=${pageNum + 1}`}>
            Next
          </StyledLink>
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
`

export default Pagination
