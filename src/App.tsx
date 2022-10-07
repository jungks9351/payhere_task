import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RepoPage from 'pages/RepoPage'
import MainPage from 'pages/MainPage'
import RepoDetailPage from 'pages/RepoDetailPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/repo">
          <Route index element={<RepoPage />} />
          <Route path=":owner/:name" element={<RepoDetailPage />} />
        </Route>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
