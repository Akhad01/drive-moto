import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import './App.scss'
import Breadcrumbs from './components/Breadcrumbs'
import Main from './components/Main'
import Catalog from './components/Catalog'
import Notfound from './components/Notfound'

function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=".catalog" element={<Catalog />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
