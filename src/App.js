import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </>
  )
}

export default App
