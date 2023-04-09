import ProductPopular from './ProductPopular'
import ProductsSection from './ProductsSection'
import SearchSection from './SearchSection'
import SecondBanner from './SecondBanner'
import BannerSection from './BannerSection'
import CategoriesSection from './CategoriesSection'

const Main = () => {
  return (
    <div>
      <BannerSection />
      <SearchSection />
      <CategoriesSection />
      <ProductsSection />
      <SecondBanner />
      <ProductPopular />
    </div>
  )
}

export default Main
