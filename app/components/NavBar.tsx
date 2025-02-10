import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-2 px-5 shadow-md border-b-[1px] sticky top-0 bg-white z-10'>
      <Image 
        src='/logo.jpg'
        alt='logo'
        width={100}
        height={100}
        className='cursor-pointer'
      />
      <div className='hidden md:flex gap-5'>
        <h2 className='hover:bg-blue-500 px-3 p-2 rounded-full hover:text-white cursor-pointer'>Home</h2>
        <h2 className='hover:bg-blue-500 px-3 p-2 rounded-full hover:text-white cursor-pointer'>History</h2>
        <h2 className='hover:bg-blue-500 px-3 p-2 rounded-full hover:text-white cursor-pointer'>Contact US</h2>
      </div>
      <UserButton />
    </div>
  )
}

export default NavBar
