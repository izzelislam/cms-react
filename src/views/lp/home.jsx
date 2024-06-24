import React from 'react'
import MainLayoutGuest from '../../components/layout/lp/main'
import HeroIlustration from '../../assets/hero.png'
import { Link } from 'react-router-dom'

const HeroSection = () => (
  <div className='bg-[#1E293B] py-8 mb-12'>
    <div className='container flex justify-between items-center'>
      <div>
        <h2 className='text-white text-4xl font-semibold mb-2'>Sinau Dev</h2>
        <p className='text-white text-md italic max-w-lg'>Belajr koding dengan cara yang menyenangkan dan paling asik, yang bikin kamu ketagihan belajar</p>
        <div>
          <button className='btn-success'>Mulai Belajar</button>
        </div>
      </div>
        <img src={HeroIlustration} className='w-1/4 hidden md:block' />
    </div>
  </div>
)

const CategorySection = () => (
  <>
    <div className='container mb-4'>
      <div className='mb-1 text-gray-800'>Category Belajar</div>
      <div className='text-sm text-gray-400'>Silahkan mulai dari yang anda mau</div>
    </div>
    <div className='container grid gap-8 grid-cols-1 md:grid-cols-3'>
      <div className='bg-white shadow-md p-4'>
        <span className='bg-indigo-500 p-1 inline-block mb-2 text-white rounded-md text-sm'>
          {'</>'}
        </span>
        <h2 className='text-sm mb-2'>Bahasa Pemrograman</h2>
        <h2 className='text-xs text-gray-500'>Belajar basic bahasa pemrograman java script, dart, php, go, kotlin dan lain-lain</h2>
      </div>
      <div className='bg-white shadow-md p-4'>
        <span className='bg-teal-400 p-1 inline-block mb-2 text-white rounded-md text-sm'>
          {'</>'}
        </span>
        <h2 className='text-sm mb-2'>Framwork</h2>
        <h2 className='text-xs text-gray-500'>Belajar basic bahasa pemrograman java script, dart, php, go, kotlin dan lain-lain</h2>
      </div>
      <div className='bg-white shadow-md p-4'>
        <span className='bg-red-400 p-1 inline-block mb-2 text-white rounded-md text-sm'>
          {'</>'}
        </span>
        <h2 className='text-sm mb-2'>Tips & Trick</h2>
        <h2 className='text-xs text-gray-500'>Belajar basic bahasa pemrograman java script, dart, php, go, kotlin dan lain-lain</h2>
      </div>
    </div>
  </>
)

const ArticleSection = () => (
  <>
    <div className='my-12'>
      <div className='container mb-4'>
        <div className='mb-1 text-gray-800'>Artikel dan Tutorial Terbaru</div>
        <div className='text-sm text-gray-400'>berikut artikel dan tutorial terbaru dari sinau dev</div>
      </div>
      <div className='container grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
          Array(18).fill(0).map((_, index) => (
            <Link to={'/article/1'} key={index}>
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
          )) 
        }

      </div>
    </div>
  </>
)

const NewsLetterSection = () => (
  <div className='bg-[#E2E8F0] py-12 mt-12'>
    <div className='container'>
      <div className='text-center'>
        <h5 className='text-sm text-green mb-2'>Newsletter  </h5>
        <h2 className='text-xl font-semibold text-gray-600 mb-2'>Biar gak ketinggalan update</h2>
        <p className='text-xs text-gray-500 max-w-lg mx-auto'>Subscribe Newsletter Petani Kode agar kamu bisa dapat info dan tips belajar coding langsung dikirim ke emailmu?</p>
        <div className='mt-5'>
          <Link className='btn-success'>Subscribe Newsletter</Link>
        </div>
      </div>
    </div>
  </div>
)

function HomePage() {

  return (
    <>
      <MainLayoutGuest>

        <HeroSection/>

        <CategorySection/>
        
        <ArticleSection/>

        <NewsLetterSection/>

      </MainLayoutGuest>
    </>
  )
}

export default HomePage