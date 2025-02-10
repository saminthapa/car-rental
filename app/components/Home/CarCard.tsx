import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsCashCoin } from 'react-icons/bs'
import { FaGasPump } from 'react-icons/fa'
import { PiSteeringWheelFill } from 'react-icons/pi'

const CarCard = (props: any) => {
  const [car, setCar] = useState<any>();

  useEffect(() => {
    if (props.car) {
      setCar(props.car)
    }
  }, [props.car])

  return car && (
    <div className='group bg-gray-50 p-2 sm:p-5 rounded-3xl m-1 sm:m-5 hover:bg-white hover:border-[1px] cursor-pointer duration-50 border-[#002860]'>
      <h2 className='text-[20px] font-medium mb-2 text-[#002860]'>
        {car.name}
      </h2>
      <h2 className='text-[28px] font-bold mb-2 text-[#002860]'>
        <span className='text-[12px] font-light'>Rs. </span>{car.price}
        <span className='text-[12px] font-light'> /day</span>
      </h2>
      <Image
        src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className='w-[250px] h-[150px] mb-3 object-contain' />

      <div className='flex justify-around group-hover:hidden'>
        <div className='text-center text-gray-500'>
          <PiSteeringWheelFill className='w-full text-[22px] mb-2' />
          <h2 className='line-clamp-5 text-[14px] font-light'>{car.carType}</h2>
        </div>

        <div className='text-center text-gray-500'>
          <BsCashCoin className='w-full text-[22px] mb-2' />
          <h2 className='line-clamp-5 text-[14px] font-light'>{car.price} lakhs</h2>
        </div>

        <div className='text-center text-gray-500'>
          <FaGasPump className='w-full text-[22px] mb-2' />
          <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg}</h2>
        </div>
      </div>

      <button className='hidden group-hover:flex bg-gradient-to-r from-[#002860] to-[#002860] p-2 rounded-lg text-white w-full px-5 justify-between items-center'>
        Rent Now
        <span className='bg-[#002860] p-1 rounded-md'>
          <svg xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4 text-white'>
            <path fillRule='evenodd'
              d='M11.03 3.97a.75.75 0 011.06 0l6.25 6.25a.75.75 0 010 1.06l-6.25 6.25a.75.75 0 11-1.06-1.06L16.94 11H6.75a.75.75 0 010-1.5h10.19l-4.97-4.97a.75.75 0 010-1.06z'
              clipRule='evenodd' />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default CarCard
