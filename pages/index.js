import React from 'react'
import FilterItems from './components/FilterItems'
import Product from './components/Product'
import Slider from './components/Slider'

export default function Home() {
  return (
    <div>
      <FilterItems />
      <Slider />
      <Product />
    </div>
  )
}
