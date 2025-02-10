'use client'

import { getCarsList } from "@/services";
import CarsFiltersOption from "./components/Home/CarsFiltersOption";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/Searchinput";
import { useEffect, useState } from "react";
import CarsList from "./components/Home/CarsList";
import ToastMsg from "./components/ToastMsg";
import { BookCreateFlagContext } from "@/context/BookingCreateFlagContext";

export default function Home() {

  const [carsList, setCarsList]=useState<any>([])
  const [carsOrgList, setCarsOrgList]=useState<any>([])
  const [showToastMsg,setShowToastMsg]=useState<boolean>(false);

    useEffect(()=>{
             getCarList_();
    },[])

  const getCarList_=async()=>{
    const result:any= await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  }
  
   
  const filterCarList=(brand:string)=>{
     const filterList=carsOrgList.filter((item:any)=>
    item.carBrand==brand);

     setCarsList(filterList);
  }

  const orderCarList=(order:any)=>{
    const sortedData = [...carsOrgList].sort((a,b)=>order==-1? a.price - b.price:b.price - a.price);
    setCarsList(sortedData);
  }

  useEffect(()=>{
     if(showToastMsg)
     {
      setTimeout(function(){
         setShowToastMsg(false)
      },4000);
     }
  },[showToastMsg])
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreateFlagContext.Provider value={{showToastMsg,setShowToastMsg}}>
      <Hero/>
      <SearchInput/>
      <CarsFiltersOption carsList={carsOrgList}
      orderCarList={(value:string)=>orderCarList(value)}
      setBrand={(value:string)=>filterCarList(value)}/>
      <CarsList carsList={carsList}/>
      {showToastMsg?<ToastMsg />:null}
      </BookCreateFlagContext.Provider>
    </div>
  );
}
