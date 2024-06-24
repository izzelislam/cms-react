import React, { useState, Fragment } from 'react'
import LogoDark from '../../../assets/logoBlack.png'
import { Menu, MenuItem, MenuItems, Transition, MenuButton } from '@headlessui/react'
import { RiLogoutCircleRLine, RiAccountCircleLine, RiDashboard3Line, RiGhostLine, RiReceiptLine, RiChat1Line, RiAccountBoxLine, RiSettings2Line, RiMenuFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';

function AdminMainLayout({children}) {
  const [isOpen, setIsopen] = useState(false)

  const toggleOpen = () => {
    setIsopen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className='w-full flex'>
      <div className={`flex-shirink-0 min-w-[250px] h-screen bg-white drop-shadow-lg  p-4 transition-all duration-300 -ml-[250px] md:ml-0 ${ isOpen ? 'ml-0' : '-ml-[250px]' }`}>
        <div className='mb-6 p-4'>
          <img src={LogoDark} className='w-36 mx-auto mb-6' alt="logo" />
        </div>
        <NavLink to='/admin/dashboard' className={({isActive}) => isActive ? 'btn-dashboard-active' : 'btn-dashboard'}>
          <RiDashboard3Line className='text-xl'/>
          <span className='ml-2 text-sm'>Dashboard</span>
        </NavLink>
        <NavLink to='/admin/category' className={({isActive}) => isActive ? 'btn-dashboard-active' : 'btn-dashboard'}>
          <RiGhostLine className='text-xl'/>
          <span className='ml-2 text-sm'>Category</span>
        </NavLink>
        <div className='btn-dashboard'>
          <RiReceiptLine className='text-xl'/>
          <span className='ml-2 text-sm'>Article</span>
        </div>
        <div className='btn-dashboard'>
          <RiChat1Line className='text-xl'/>
          <span className='ml-2 text-sm'>Komentar</span>
        </div>
        <div className='btn-dashboard'>
          <RiAccountBoxLine className='text-xl'/>
          <span className='ml-2 text-sm'>User</span>
        </div>
        <div className='btn-dashboard'>
          <RiSettings2Line className='text-xl'/>
          <span className='ml-2 text-sm'>Setting</span>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between items-center h-16 bg-white drop-shadow-lg relative z-50'>
          <div className='px-6'>
            <button onClick={toggleOpen} className='md:hidden block'>
              <RiMenuFill className='text-3xl'/>
            </button>
          </div>
          <div className='px-6'>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/id/thumb/d/d5/Aang_.jpg/300px-Aang_.jpg" className='w-10 h-10 rounded-full ' />
                  <div className='ml-2 text-gray-900 text-sm'>Admin@mail.com</div>
                </MenuButton>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <MenuItem>
                      <div className='group flex w-full h-[50px] items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer'>
                        <RiAccountCircleLine className='text-xl me-4'/>
                        <span>Profile</span>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div className='group flex w-full h-[50px] items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer'>
                        <RiLogoutCircleRLine className='text-xl me-4'/>
                        <span>Logout</span>
                      </div>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className='p-6 z-0'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminMainLayout
