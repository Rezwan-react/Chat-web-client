import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './components/layout/Layout'
import RegisterLoginPage from './pages/RegisterLoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/registerLogin' element={<RegisterLoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
