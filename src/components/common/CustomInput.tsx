import { ChangeEventHandler } from 'react'
import styled from 'styled-components'

interface CustomInputProps {
  onChange: ChangeEventHandler
  id?: string
  type: string
  autoComplete: string
  placeholder: string
  width: number
  height: number
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
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
`

export default CustomInput
