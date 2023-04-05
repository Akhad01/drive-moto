import { product1, product2, product3, product4 } from '../../assets'

const productCards = [
  {
    name: 'Водонепроницаемый Рюкзак',
    img: product1,
    price: '9 800 ₽',
    id: '1',
    isAvailable: true,
    isSale: false,
    heart: false,
  },
  {
    name: "Спасательный жилет BRP Men's Airflow PFD",
    img: product2,
    price: '6 900 ₽',
    id: '2',
    isAvailable: true,
    isSale: true,
    heart: false,
  },
  {
    name: 'BRP Audio-Premium System',
    img: product3,
    price: '68 000 ₽',
    id: '3',
    isAvailable: true,
    isSale: false,
    heart: false,
  },
  {
    name: 'Спасательное снаряжение',
    img: product4,
    price: '8 000 ₽',
    id: '4',
    isAvailable: true,
    isSale: true,
    heart: false,
  },
  {
    name: 'Водонепроницаемый Рюкзак',
    img: product1,
    price: '9 800 ₽',
    id: '5',
    isAvailable: true,
    isSale: false,
    heart: false,
  },
  {
    name: "Спасательный жилет BRP Men's Airflow PFD",
    img: product2,
    price: '6 900 ₽',
    id: '6',
    isAvailable: true,
    isSale: true,
    heart: false,
  },
  {
    name: 'BRP Audio-Premium System',
    img: product3,
    price: '68 000 ₽',
    id: '7',
    isAvailable: true,
    isSale: false,
    heart: false,
  },
  {
    name: 'Спасательное снаряжение',
    img: product4,
    price: '8 000 ₽',
    id: '8',
    isAvailable: false,
    isSale: false,
    heart: false,
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(productCards)
    }, 2000)
  })

export default fetchAll
