import './App.scss'
import BannerSection from './components/BannerSection'
import Header from './components/Header/Header'
import SearchSection from './components/SearchSection'

function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <SearchSection />
    </div>
  )
}

export default App
