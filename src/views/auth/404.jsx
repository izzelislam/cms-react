import React from 'react'
import IlHero from '../../assets/hero.png'
import { Link } from 'react-router-dom'
function NotFoundPage() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='min-w-[400px]p-6 flex flex-col justify-center'>
        <img src={IlHero} className='w-64 mx-auto mb-6' alt="logo" />
        <h4 className='text-center text-gray-600 mb-3'>Halaman Tidak Ditemukan</h4>
        <Link to='/' className='w-full bg-green text-white text-sm rounded-lg px-4 py-3 hover:bg-slate-green hover:text-green transition-all duration-300 text-center'> Kembali</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
