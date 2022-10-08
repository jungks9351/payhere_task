import { ChangeEvent, useState } from 'react'

const useInputValue = () => {
  const [value, setValue] = useState('')

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  return { value, handleChangeValue }
}

export default useInputValue
