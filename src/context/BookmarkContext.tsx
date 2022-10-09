import { createContext, Dispatch, ReactNode, useReducer } from 'react'

import { RepoType } from 'src/type'

type Action =
  | { type: 'updateBookmark'; payload: RepoType[] }
  | { type: 'createBookmark'; bookmark: RepoType }
  | { type: 'removeBookmark'; id: number }

const initialBookmark: RepoType[] = []

const bookmarkReducer = (state: RepoType[], action: Action) => {
  switch (action.type) {
    case 'updateBookmark':
      return (state = action.payload)
    case 'createBookmark': {
      return (state = [...state, action.bookmark])
    }
    case 'removeBookmark': {
      return state.filter((bookmark) => bookmark.id !== action.id)
    }
    default:
      throw new Error('Error')
  }
}

export type BookmarkState = RepoType[]
export type BookmarkDispatch = Dispatch<Action>

export const BookmarkStateContext = createContext<BookmarkState | null>(null)

export const BookmarkDispatchContext = createContext<BookmarkDispatch | null>(
  null,
)

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(bookmarkReducer, initialBookmark)
  return (
    <BookmarkDispatchContext.Provider value={dispatch}>
      <BookmarkStateContext.Provider value={state}>
        {children}
      </BookmarkStateContext.Provider>
    </BookmarkDispatchContext.Provider>
  )
}
