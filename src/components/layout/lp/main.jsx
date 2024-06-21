import React from 'react'
import NavbarGuest from './navbar'
import FooterGuest from './footer'

export default function MainLayoutGuest({children}) {
  return (
    <div>
      <NavbarGuest/>
      {children}
      <FooterGuest/>
    </div>
  )
}
