'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const item = useSelector((state)=>state.cart)
  return (
    <div className='flex justify-between items-center bg-red-400 px-5 text-4xl font-bold py-3'>
        <p>Redux Cart</p>
        <div className='flex items-center gap-3'>
        <Link href={'/'}>Home</Link>
        <Link href={'/cart'}>Cart: {item?.length || 0}</Link>
        </div>
    </div>
  )
}

export default Navbar