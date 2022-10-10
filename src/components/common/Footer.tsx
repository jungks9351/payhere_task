import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <div>Copyright ⓒ2022 JungJinKim.</div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Footer
