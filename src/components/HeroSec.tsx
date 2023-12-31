// "use client"
// import { Repeat } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { Check, ChevronsUpDown } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//     Command,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
// } from "@/components/ui/command"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"

// const frameworks = [
//     {
//         value: "ethereum",
//         label: "Ethereum",
//     },
//     {
//         value: "bitcoin",
//         label: "Bitcoin",
//     },
// ]
// const frameworks2 = [
//     {
//         value: "ethereum",
//         label: "Ethereum",
//     },
//     {
//         value: "bitcoin",
//         label: "Bitcoin",
//     },
// ]


// const HeroSec = ({ data, dataoppo }: any) => {
//     console.log(dataoppo, "data argument check kru")
//     const [input1val, setInput1val] = useState(1)
//     const handleChange = (event: any) => {
//         const newValue = event.target.value;
//         setInput1val(newValue);
//     };
//     const [isSwapped, setIsSwapped] = useState(false);
//     const [input2val, setInput2val] = useState((data * input1val).toFixed(2))
//     const calculateValue = isSwapped ? (input1val * dataoppo).toFixed(2) : (input1val * data).toFixed(2);

//     useEffect(() => {
//         setInput2val(calculateValue);
//     }, [input1val, isSwapped]);
//     const [firstHeading, setFirstHeading] = useState("Ethereum");
//     const [secondHeading, setSecondHeading] = useState("Bitcoin");
//     const handleButtonClick = () => {
//         const temp = firstHeading
//         setFirstHeading(secondHeading);
//         setSecondHeading(temp);
//         setIsSwapped(!isSwapped);
//     };
//     return (
//         <main className='w-full bg-gradient-to-r from-[#47509b] to-[#414fba] h-[580px] flex justify-center pb-5 pt-20'>
//             <div className='flex flex-col w-full gap-12'>
//                 <div className='flex flex-col gap-4'>
//                     <h1 className='text-4xl text-white font-bold text-center'>ETH to BTC</h1>
//                     <h3 className='text-[17px] text-white text-center px-4'>Convertion Between Ethereum ( ETH ) and Bitcoin ( BTC ) </h3>
//                 </div>
//                 <div className='flex w-full gap-3 sm:gap-8 md:gap-4 px-20 sm:px-8 md:px-64'>
//                     <div className='w-[40%] flex flex-col gap-4 justify-center items-end'>
//                         <div className=' shadow-xl'>

//                             <h1 className='text-xl font-semibold text-white'>{firstHeading} </h1>
//                         </div>
//                         <div className='bg-white rounded-xl h-12 sm:h-20 shadow-lg px-3 flex items-center justify-between w-[155px] sm:w-[240px]'>
//                             <h1 className='text-xl font-bold'>=</h1>
//                             <input className='text-right px-2 sm:px-1 w-32 sm:w-40 h-10 sm:h-14 text-lg font-semibold' type="number" value={input1val} onChange={handleChange} />
//                         </div>
//                     </div>
//                     <div className='w-[20%] flex flex-col gap-4 justify-center items-center'>
//                         <div onClick={handleButtonClick} className='w-11 h-11 sm:w-16 sm:h-16 rounded-full cursor-pointer flex items-center justify-center hover:shadow-xl hover:border-[20px] border-opacity-5 border-0 border-[#f9c734] bg-[#f9c734] hover:rotate-180 transition duration-500'>
//                             <Repeat />
//                         </div>
//                     </div>
//                     <div className='w-[40%] justify-center items-start flex flex-col gap-4'>
//                         <div className=' shadow-xl'>
//                             <h1 className='text-xl font-semibold text-white'>{secondHeading}</h1>
//                         </div>
//                         <div className='w-[155px] sm:w-[240px] h-12 sm:h-20 shadow-lg px-3 rounded-xl flex items-center justify-between bg-white'>
//                             <h1 className='text-xl font-bold'>=</h1>
//                             <input className='text-right px-2 sm:px-1 w-32 sm:w-40 h-10 sm:h-14  text-lg font-semibold' value={input2val} />
//                             {/* <Input type="email" className="rounded-lg " placeholder="Email"/> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }
// export default HeroSec