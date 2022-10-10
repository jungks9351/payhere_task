import { useEffect, useState } from 'react'
import { RepoType } from 'src/type'
import useBookmarksDispatch from './useBookmarksDispatch'

type useIsBookmarkProps = {
  repoItemData: RepoType
  toggleAlaram: () => void
}

const useIsBookmark = ({ repoItemData, toggleAlaram }: useIsBookmarkProps) => {
  const dispatch = useBookmarksDispatch()
  const [isBookmark, setIsBookmark] = useState(false)

  const addBookmark = () => {
    const bookmarkData = JSON.parse(localStorage.getItem('bookmarks') || '[]')

    if (bookmarkData.length === 4 && !isBookmark) {
      toggleAlaram()
      return
    }

    const payload = {
      id: repoItemData.id,
      full_name: repoItemData.full_name,
      owner: {
        avatar_url: repoItemData.owner.avatar_url,
      },
      description: repoItemData.description,
      html_url: repoItemData.html_url,
    }

    bookmarkData.push(payload)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkData))

    dispatch({ type: 'createBookmark', bookmark: payload })

    setIsBookmark(true)
  }

  const removeBookmark = () => {
    const bookmarkData = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    const newBookmarks = bookmarkData.filter(
      (bookmark: RepoType) => bookmark.id !== repoItemData.id,
    )
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))

    dispatch({ type: 'removeBookmark', id: repoItemData.id })

    setIsBookmark(false)
  }

  useEffect(() => {
    const bookmarkData = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    bookmarkData.map((bookmark: RepoType) => {
      if (bookmark.id === repoItemData.id) {
        setIsBookmark(true)
      }
    })
    dispatch({ type: 'updateBookmark', payload: bookmarkData })
  }, [repoItemData.id, dispatch])

  return { isBookmark, addBookmark, removeBookmark }
}

export default useIsBookmark
