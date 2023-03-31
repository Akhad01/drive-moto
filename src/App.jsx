import './App.scss'
import BannerSection from './components/BannerSection'
import CategoriesSection from './components/CategoriesSection'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import ProductPopular from './components/ProductPopular'
import ProductsSection from './components/ProductsSection'
import SearchSection from './components/SearchSection'
import SecondBanner from './components/SecondBanner'

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <SearchSection />
      <CategoriesSection />
      <ProductsSection />
      <SecondBanner />
      <ProductPopular />
      <Footer />
    </div>
  )
}

export default App
