import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import RegisterLoginPage from './pages/RegisterLoginPage'
import ChatPage from './pages/ChatPage'
import GroupPage from './pages/GroupPage'
import PeoplePage from './pages/PeoplePage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/registerLogin' element={<RegisterLoginPage />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<ChatPage />} />
            <Route path='/group' element={<GroupPage />} />
            <Route path='/people' element={<PeoplePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
