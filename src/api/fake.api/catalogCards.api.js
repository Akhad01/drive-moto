import {
  gidrotsikl1,
  gidrotsikl10,
  gidrotsikl11,
  gidrotsikl12,
  gidrotsikl2,
  gidrotsikl3,
  gidrotsikl4,
  gidrotsikl5,
  gidrotsikl6,
  gidrotsikl7,
  gidrotsikl8,
  gidrotsikl9,
} from '../../assets'

const catalogCards = [
  {
    name: 'Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango',
    img: gidrotsikl1,
    price: '1 049 500 ₽',
    id: '1',
    isAvailable: true,
    isSale: false,
    heart: false,
  },
  {
    name: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic',
    img: gidrotsikl2,
    price: '1 100 475 ₽',
    id: '2',
    isAvailable: true,
    isSale: true,
    heart: false,
  },
  {
    name: 'Гидроцикл BRP SeaDoo GTR 230hp X California green',
    img: gidrotsikl3,
    price: '1 323 700 ₽',
    id: '3',
    isAvailable: true,
    isSale: false,
    heart: false,
  },
  {
    name: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream',
    img: gidrotsikl4,
    price: '1 323 700 ₽',
    id: '4',
    isAvailable: true,
    isSale: true,
    heart: false,
  },
  {
    name: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal',
    img: gidrotsikl5,
    price: '1 543 000 ₽',
    id: '5',
    isAvailable: true,
    isSale: false,
    heart: false,
  },
  {
    name: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up',
    img: gidrotsikl6,
    price: '732 345 ₽',
    id: '6',
    isAvailable: true,
    isSale: true,
    heart: false,
  },
  {
    name: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental',
    img: gidrotsikl7,
    price: '857 666 ₽',
    id: '7',
    isAvailable: true,
    isSale: false,
    heart: false,
  },
  {
    name: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue',
    img: gidrotsikl8,
    price: '1 229 711 ₽',
    id: '8',
    isAvailable: false,
    isSale: false,
    heart: false,
  },
  {
    name: 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper',
    img: gidrotsikl9,
    price: '587 440 ₽',
    id: '9',
    isAvailable: false,
    isSale: false,
    heart: false,
  },
  {
    name: 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple ',
    img: gidrotsikl10,
    price: '587 440 ₽',
    id: '10',
    isAvailable: false,
    isSale: false,
    heart: false,
  },
  {
    name: 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla ',
    img: gidrotsikl11,
    price: '587 440 ₽',
    id: '11',
    isAvailable: false,
    isSale: false,
    heart: false,
  },
  {
    name: 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry',
    img: gidrotsikl12,
    price: '587 440 ₽',
    id: '12',
    isAvailable: false,
    isSale: false,
    heart: false,
  },
]

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(catalogCards)
    }, 2000)
  })

export default fetchAll
