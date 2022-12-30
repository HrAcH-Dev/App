import React from 'react'
import Brands from './components/Brands'
import FilterItems from './components/FilterItems'
import Foods from './components/Foods'
import Product from './components/Product'
import Shop from './components/Shop'
import Slider from './components/Slider'

export default function Home() {
  return (
    <div>
      <FilterItems />
      <Slider />
      <Product />
      <Shop />
      <Brands />
      <Foods />
    </div>
  )
}
