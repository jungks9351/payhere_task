import { ReactNode } from 'react'
import styled from 'styled-components'

const Layout = ({ children }: { children: ReactNode }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

const LayoutWrapper = styled.main`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default Layout
