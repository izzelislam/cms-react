import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard() {
  return (
    <>
      <Link to={'/article/1'} >
        <div className='bg-white shadow-md p-4 rounded-lg'>
          <div 
            style={{backgroundImage: `url(https://www.petanikode.com/img/cover/cpp-union.png)`}}
            className='w-full h-40 bg-cover bg-center rounded-md mb-4'
          ></div>
          <h2 className='text-sm mb-2 text-gray-700'>Belajar C++ #13: Mengenal Tipe Data Union</h2>
          <p className='text-xs text-gray-500'>
            Pada tutorial ini, kita akan belajar tentang tipe data union di C++. Mengapa kita butuh Union dan apa bedanya dengan Struct? Simak selengkapnya
          </p>
        </div>
      </Link>
    </>
  )
}

export default ItemCard
