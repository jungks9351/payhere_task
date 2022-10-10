import styled, { keyframes } from 'styled-components'

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  )
}

const spin = keyframes`
to {
  transform: rotate(360deg);
}
`

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 8px solid #000;
  border-bottom: 8px solid #a6aab0;
  animation: ${spin} 1s linear infinite;
`

export default Loading
