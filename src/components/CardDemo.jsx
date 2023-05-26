import React from 'react'
import CardChip from '../assets/CardChip'
import { Wifi } from 'lucide-react'
import MaterCard from '../assets/MaterCard'

const CardDemo = ({number, date1, date2}) => {
  let newNumber = number.substring(number.length - 4)
  return (
    <div className='flex flex-col inset-0 bg-gradient-to-b from-transparent via-transparent to-white backdrop-filter backdrop-blur-lg opacity-80 rounded-md absloute left-[50%] translate-x-[20%] -translate-y-10 transform md:-translate-y-14 md:translate-x-1/3 w-[200px] h-[250px] bg-white'>
        <header className="flex justify-between items-start w-full h-full p-2">
            <div className='transform rotate-90' ><CardChip height={"40px"} width={"40px"}/></div>
            <div className=''> <Wifi className='w-[35px] h-[35px] text-slate-600'/></div>
            
        </header>

        <main className="w-full h-full flex flex-col gap-2 pl-4 pr-2 justify-end">
            <h3 className="text-medium text-sm capitalize text-indigo-950"> Jonathan Micheal</h3>
            <h2 className="text-semibold text-md capitalize text-indigo-950">**** <span>{newNumber ? newNumber : '6789'}</span></h2>
            <div className="flex justify-between w-full items-center">
                <div className="w-[50%] text-semibold text-sm capitalize text-indigo-950"><span>{date1 ? date1 : '24'}</span> / <span>{date2 ? date2 : '12'}</span></div>
                <div className="w-[50%] h-[60px] flex justify-end"> <MaterCard height={"60px"}/> </div>
            </div>
        </main>
    </div>
  )
}

export default CardDemo