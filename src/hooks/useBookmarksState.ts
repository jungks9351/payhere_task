import { useContext } from 'react'
import { BookmarkStateContext } from 'src/context/BookmarkContext'

const useBookmarksState = () => {
  const state = useContext(BookmarkStateContext)
  if (!state) throw new Error('Error')
  return state
}

export default useBookmarksState
