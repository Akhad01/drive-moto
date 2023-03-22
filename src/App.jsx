import './App.scss'
import BannerSection from './components/BannerSection'
import CategoriesSection from './components/CategoriesSection'
import Header from './components/Header/Header'
import SearchSection from './components/SearchSection'

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <SearchSection />
      <CategoriesSection />
    </div>
  )
}

export default App
