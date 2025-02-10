import { BookCreateFlagContext } from '@/context/BookingCreateFlagContext';
import { createBooking, getStoreLocations } from '@/services'
import React, { useContext, useEffect, useState } from 'react'

const Form = ({car}:any) => {
  const [storeLocation,setStoreLocation]=useState<any>([]);
  const {showToastMsg,setShowToastMsg}=useContext(BookCreateFlagContext)

  const [formValue,setFormValue]=useState({
    location:'',
    carList:'',
    dropOffTime:'',
    pickUpDate:'',
    pickUpTime:'',
    dropOffDate:'', 
    contactNumber:'',
    userName: 'samin',
    
  })
  useEffect(()=>{
    getStoreLocation_();
  },[])

  useEffect(()=>{
    if(car)
    {
      setFormValue({
        ...formValue,
        carList: car.id
      });
    }
  },[car])
  const getStoreLocation_=async()=>{
    const resp:any=await getStoreLocations();
    console.log(resp);
    setStoreLocation(resp?.storesLocations)
  }
     
  const handleChange=(event:any)=>{
    setFormValue({
      ...formValue,
      [event.target.name]:event.target.value
    });
  }

  const handleSubmit=async()=>{
    console.log(formValue);
    const resp=await createBooking(formValue);
    console.log(resp);
    if(resp)
    {
      setShowToastMsg(true);
    }
  }

  return (
    <div>
      <div className='flex flex-col w-full mb-5'>
        <label className='text-gray-400'>PickUp Location</label>
        <select className='select select-bordered w-full max-w-lg' name='location'
        onChange={handleChange}>
            <option disabled selected>PickUp Location</option>
            {storeLocation&&storeLocation.map((loc:any,index:number)=>(
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>

      <div className='flex gap-5 mb-5'>
        <div className='flex flex-col w-full'>
            <label className='text-gray-400'>
                Pick Up Date
            </label>
            <input type="date" placeholder='Type here' name='pickUpDate' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
        </div>

      <div className='flex flex-col w-full'>
        <label className='text-gray-400'>Drop Off Date</label>
        <input type="date" placeholder='Type here' name='dropOffDate' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
    </div>
    </div>

     <div className='flex gap-5'>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-400'>Pick Up Time</label>
            <input type='time' placeholder='Type here' name='pickUpTime' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
        </div>

        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-400'>Pick Off Time</label>
            <input type='time' placeholder='Type here' name='dropOffTime' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
        </div>

    </div>

    <div className='flex flex-col w-full mb-5'>
        <label className='text-gray-400'>Contact Number</label>
        <input type="text" placeholder="Type here" name='contactNumber' onChange={handleChange} className="input input-bordered w-full max-w-lg" />
      </div>

      <div className="model-action">
        <form method='dialog'>
        <button className="btn">Close</button>
      <button className="btn bg-[#003c8f] text-white hover:bg-[#002860]"
      onClick={handleSubmit}>Save</button>
        </form>
    </div>
    </div>
  )
}

export default Form
