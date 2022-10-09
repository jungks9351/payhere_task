import { ChangeEventHandler } from 'react'
import styled from 'styled-components'

interface CustomInputProps {
  onChange: ChangeEventHandler
  id?: string
  type: string
  autoComplete: string
  placeholder: string
  width: string
  height: string
  fontSize: number
}

const CustomInput = ({
  onChange,
  id,
  type,
  autoComplete,
  placeholder,
  width,
  height,
  fontSize,
}: CustomInputProps) => {
  return (
    <StyledInput
      onChange={onChange}
      id={id}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      width={width}
      height={height}
      fontSize={fontSize}
    />
  )
}

const StyledInput = styled.input<CustomInputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => `${fontSize}px`};
`

export default CustomInput
