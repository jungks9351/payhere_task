import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <div>Copyright ⓒ2022 JungJinKim.</div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  font-weight: bold;
  text-align: center;

  padding: 30px 0;
`

export default Footer
