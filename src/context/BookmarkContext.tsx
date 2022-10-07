import { createContext, Dispatch, ReactNode, useReducer } from 'react'

import { RepoItmeType } from 'src/type'

type Action = {
  type: string
  payload: RepoItmeType[]
}

const initialBookmark: RepoItmeType[] = []

const bookmarkReducer = (state: RepoItmeType[], action: Action) => {
  switch (action.type) {
    case 'updateBookmark':
      return (state = action.payload)
    default:
      throw new Error('Error')
  }
}

export type BookmarkState = RepoItmeType[]
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
