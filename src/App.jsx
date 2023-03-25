import './App.scss'
import BannerSection from './components/BannerSection'
import CategoriesSection from './components/CategoriesSection'
import Header from './components/Header/Header'
import ProductsSection from './components/ProductsSection'
import SearchSection from './components/SearchSection'

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <SearchSection />
      <CategoriesSection />
      <ProductsSection />
    </div>
  )
}

export default App
