import React from 'react'
import MainLogo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'

function NavbarGuest() {
  return (
    <>
      <div className='sticky top-0 z-10'>
        <div className='w-full bg-[#0D9488]'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <Link to='/' className='py-2'>
                      <img src={MainLogo} className='w-[120px]' />
                    </Link>
                    <div>
                      <ul className='flex items-center'>
                        <li>
                          <Link to='/article' className="mx-1 px-3 py-2 text-white text-sm rounded-md hover:bg-[#8cf2ea] hover:text-[#0D9488] transition-all duration-300 cursor-pointer">Tutorial</Link>
                        </li>
                        <li className='mx-1 px-3 py-2 text-white text-sm rounded-md hover:bg-[#8cf2ea] hover:text-[#0D9488] transition-all duration-300 cursor-pointer'>Artikel</li>
                        <li className='mx-1 px-3 py-2 text-white text-sm rounded-md hover:bg-[#8cf2ea] hover:text-[#0D9488] transition-all duration-300 cursor-pointer'>Tentang</li>
                        <li>
                          <Link to='/login' className="mx-1 px-3 py-2 text-white text-sm rounded-md hover:bg-[#8cf2ea] hover:text-[#0D9488] transition-all duration-300 cursor-pointer">Login</Link>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default NavbarGuest