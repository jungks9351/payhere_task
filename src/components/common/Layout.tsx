import { ReactNode } from 'react'
import styled from 'styled-components'

const Layout = ({ children }: { children: ReactNode }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
`

export default Layout
