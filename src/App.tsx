import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RepoPage from 'pages/RepoPage'
import MainPage from 'pages/MainPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/repo" element={<RepoPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
