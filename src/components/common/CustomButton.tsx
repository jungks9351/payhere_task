import styled from 'styled-components'

interface CustomButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined
  title: string
  children: string
  width: number
  height: number
  fontSize: number
}

const CustomButton = ({
  type,
  title,
  children,
  width,
  height,
  fontSize,
}: CustomButtonProps) => {
  return (
    <StyledButton
      type={type}
      title={title}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<CustomButtonProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
`
export default CustomButton
