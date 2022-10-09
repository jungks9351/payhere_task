import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <div>Copyright ⓒ2022 JungJinKim.</div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 0;
`

export default Footer
