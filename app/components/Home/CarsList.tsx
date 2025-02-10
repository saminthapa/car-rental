import React, { useState } from 'react'
import CarCard from './CarCard'
import BookingModel from '../CarBooking/BookingModel';

const CarsList = (props:any) => {
  const[selectorCar,setSelectorCar]=useState<any>([]);

  return (
    <div className='grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4'>
      {props.carsList.map((car:any,index:number)=>(
        <div key={index} 
        onClick={()=>{
          const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
        modal.showModal();
        
    }
    setSelectorCar(car);
} }>
            <CarCard car={car}/>            
        </div>
      ))}

     
<dialog id="my_modal_4" className="modal">
   <BookingModel car={selectorCar}/>
</dialog>

    </div>
  )
}

export default CarsList
