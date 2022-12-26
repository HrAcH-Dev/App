import React from 'react'
import Header from './Header'
import HeaderMin from './Header/HeaderMin'

export default function Layout({ children }) {
  return (
    <div>
        <HeaderMin />
        <Header />
        {children}
    </div>
  )
}
