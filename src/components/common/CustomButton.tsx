import styled from 'styled-components'

interface CustomButtonProps {
  onClick?: () => void
  type: 'button' | 'submit' | 'reset' | undefined
  title: string
  children: string
  width?: number
  height?: number
  fontSize?: number
}

const CustomButton = ({
  onClick,
  type,
  title,
  children,
  width,
  height,
  fontSize,
}: CustomButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
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
  cursor: pointer;
`
export default CustomButton
