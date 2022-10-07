import { createContext, Dispatch, ReactNode, useReducer } from 'react'

type BookmarkRepo = {
  id: number
  full_name: string
  owner: {
    avatar_url: string
  }
  description: string
  html_url: string
}

type Action = {
  type: string
  payload: BookmarkRepo[]
}

const initialBookmark: BookmarkRepo[] = []

const bookmarkReducer = (state: BookmarkRepo[], action: Action) => {
  switch (action.type) {
    case 'updateBookmark':
      return (state = action.payload)
    default:
      throw new Error('Error')
  }
}

export type BookmarkState = BookmarkRepo[]
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
