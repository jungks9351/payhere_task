import { useContext } from 'react'
import { BookmarkDispatchContext } from 'src/context/BookmarkContext'

const useBookmarksDispatch = () => {
  const dispatch = useContext(BookmarkDispatchContext)
  if (!dispatch) throw new Error('Error')
  return dispatch
}

export default useBookmarksDispatch
