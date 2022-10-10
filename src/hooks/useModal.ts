import { useState } from 'react'

const useModal = () => {
  const [isVisible, setIsVibile] = useState(false)

  const toggleModal = () => {
    setIsVibile(!isVisible)
  }

  return { isVisible, toggleModal }
}

export default useModal
