'use client'
import React from 'react'
import { remove } from '@/redux/Cartslice'
import { useDispatch,useSelector } from 'react-redux'
import Image from 'next/image'

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart)

    const handelRemove = (id) => {
        dispatch(remove(id))
    }

  return (
    <div className='mx-5'>
        <h3 className='text-center text-4xl font-bold text-black py-3'>Cart Page</h3>
        {cartItems.map((item) => (
        <div key={item.id} className="">
          <div className="flex gap-5 items-center shadow-xl p-5">
            <div>
              <Image
                src={item.image}
                alt="image"
                width={100}
                height={100}
              ></Image>
            </div>
            <div>
              <h4 className="font-bold text-xl">{item.title.slice(0,20)}</h4>
              <p>{item.description.slice(0,100)}</p>
              <p className="text-red-600 font-bold py-3 text-xl">${item.price}</p>
              <button onClick={()=> handelRemove(item.id)} className="bg-teal-600 text-white px-3 py-1 rounded-md ">Remove from Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartPage