import React from 'react'
import MainLogo from '../../../assets/logo.png'

function FooterGuest() {
  return (
    <div className='bg-dark'>
      <div className='container py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
        <div className='text-white'>
          <img src={MainLogo} className='w-[120px]' />
          <div className='mt-6 text-xs line-clamp-4'>
            belajar programing jadi <br/> makin seru dan menarik 
          </div>
        </div>
        <div>
          <div className='text-white mb-2 text-md font-semibold'>Belajar</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Tutorial</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Artikel</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Ebook</div>
        </div>
        <div>
          <div className='text-white mb-2 text-md font-semibold'>Sosial Media</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Bahasa Pemrograman</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Framework</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Tips & Trick</div>
        </div>
        <div>
          <div className='text-white mb-2 text-md font-semibold'>Kategori</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Bahasa Pemrograman</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Framework</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Tips & Trick</div>
        </div>
        <div>
          <div className='text-white mb-2 text-md font-semibold'>Sinau Dev</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Bahasa Pemrograman</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Framework</div>
          <div className='text-sm text-white mb-2 cursor-pointer'>Tips & Trick</div>
        </div>
      </div>
    </div>
  )
}

export default FooterGuest