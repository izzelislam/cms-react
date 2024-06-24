import React from 'react'
import LogoBlack from '../../assets/logoBlack.png'

function LoginPage() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='min-w-[400px] bg-white drop-shadow-md rounded-lg p-6'>
        <img src={LogoBlack} className='w-36 mx-auto mb-6' alt="logo" />
        <h4 className='text-center text-gray-600 mb-3'>Login Admin Panel</h4>
        <div className='mb-4'>
          <label className='text-gray-400 text-sm'>Email</label>
          <input type="text" className='w-full border border-gray-300 p-2 rounded-md outline-none focus:border-teal-600' />
        </div>
        <div className='mb-4'>
          <label className='text-gray-400 text-sm'>Password</label>
          <input type="text" className='w-full border border-gray-300 p-2 rounded-md outline-none focus:border-teal-600' />
        </div>
        <div className='text-gray-400 text-sm mb-6'>
          <input type='checkbox' className='mr-2 checked:bg-gray-900 fill-slate-900' id='me'/> <label htmlFor='me'>Ingat saya ?</label>
        </div>
        <div className='w-full'>
          <button className='w-full bg-green text-white text-sm rounded-lg px-4 py-3 hover:bg-slate-green hover:text-green transition-all duration-300'> Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
