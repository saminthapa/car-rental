import React from 'react'
import CarCard from '../Home/CarCard';
import Form from './Form';


const BookingModel = ({car}:any) => {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
    <div className='border-b-[1px] pb-2'>
        <h3 className='text-[30px] font-light text-gray-400'>Rent Car</h3>
    </div>
    <div className='grid grid-cols-1
    md:grid-cols-2'>
        <div>
            <CarCard car={car}/>
        </div>
        <div>
            <Form car={car}/>
        </div>

    </div>
    
  </div>
  )
}

export default BookingModel
