import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import MyProfilePage from './pages/MyProfilePage.jsx'
import OverviewPage from './pages/OverviewPage.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Routes>
    </>
  )
}

export default App
