import React from 'react'
import Header from './Header'
import HeaderMin from './Header/HeaderMin'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
        <HeaderMin />
        <Header />
        {children}
        <Footer />
    </div>
  )
}
