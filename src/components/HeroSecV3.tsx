"use client"
import { Repeat } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,} from "@/components/ui/command"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Separator } from './ui/separator'
import { type } from 'os'
import { Input } from 'postcss'
import Github from './Github'

const HeroSecV3 = ({ labels }: any) => {
    // console.log(labels, "data argument check kru")
    var [input1val, setInput1val] = useState(0)
    var [input2val, setInput2val] = useState<any>(0)
    var [answerCheck, setAnswerCheck] = useState<any>(0)
    var [result, setResult] = useState<any>(0);
    var [resultReverse, setResultReverse] = useState<any>(0);

    const handleChange1 = (event: any) => {
        const newValue = event.target.value;
        if (value !== 'Select Currency...' && value2 !== 'Select Currency...') {
            const currency1 = labels.find((currency: any) => currency.value === value);
            const currency2 = labels.find((currency: any) => currency.value === value2);
            const multiply = result * newValue
            setInput2val(multiply)
            console.log(`Input Value Of First Input Bar ${input1val} x ${result} = ${multiply}` )
        }
        setInput1val(newValue);
    }
    const handleChange2 = (event: any) => {
        const newValue = event.target.value;
        if (value !== 'Select Currency...' && value2 !== 'Select Currency...') {
            const multiply = resultReverse * newValue
            setInput1val(multiply)
        }
        setInput2val(newValue);
    }

    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [open2, setOpen2] = React.useState(false)
    const [value2, setValue2] = React.useState("")

    function findLabelByValue(valueToFind: any) {
        const match = labels.find((item: any) => item.label.toLowerCase() === valueToFind.toLowerCase());
        return match ? match.value : "Select Currency...";
    }
    function findDetailsByValue(valueToFind: any) {
        const match = labels.find((item: any) => item.label.toLowerCase() === valueToFind.toLowerCase());
        return match ? match : "Select Currency...";
    }
    useEffect(() => {
        if (value !== 'Select Currency...' && value2 !== 'Select Currency...') {
            const currency1 = labels.find((currency: any) => currency.value === value);
            const currency2 = labels.find((currency: any) => currency.value === value2);
            if (currency1 && currency2) {
                const value1Price = currency1.price;
                const value2Price = currency2.price;
                const divisionResultUp = value2Price / value1Price;
                const divisionResultDown = value1Price / value2Price;
                setResult(divisionResultUp);
                setResultReverse(divisionResultDown);
            }
        }
    }, [value, value2,labels]);
    // console.log(answerCheck, "answer in console")

    return (
        <main className='w-full h-full flex justify-center pb-5 pt-20'>
            <div className='flex flex-col w-full gap-12'>
                <div className='flex flex-col gap-4'>
                    <h1 className='sm:text-4xl text-[34px] text-white font-bold text-left pl-4 sm:text-center leading-snug '>All Crypto Currencies Converter</h1>
                    <h3 className='text-[17px] text-white sm:text-center px-4 pl-4 text-left'>Convertion tool to convert between any crypto currency </h3>
                </div>
                <div className='flex flex-col justify-center items-center w-full gap-4 sm:gap-8 md:gap-4 px-20 sm:px-6 md:px-64'>
                    <div className=' flex flex-col gap-6 sm:gap-4 justify-center items-end'>
                        <div className=' shadow-xl'>
                            {/* <h1  className='text-xl font-semibold text-white'>{firstHeading} </h1> */}
                        </div>
                        <div className='bg-white rounded-xl h-16 sm:h-20 shadow-lg px-3 flex items-center justify-between active:border-2 active:border-b-slate-900 w-[330px] sm:w-[380px]'>
                            <div className='flex gap-2 items-center'>
                                <input className='text-left px-2 sm:px-1 w-32 sm:w-36 outline-none border-transparent sm:h-[78px] h-10 text-lg font-semibold' type="number" value={input1val} onChange={handleChange1} />
                                <Separator orientation="vertical" className=' h-14 bg-gray-300' />
                            </div>
                            <Popover open={open2} onOpenChange={setOpen2}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open2}
                                        className="outline-none border-transparent justify-between"
                                    >
                                        {
                                            value2
                                                ? labels.find((labels: any) => labels.value === value2)?.label
                                                : "Select Currency..."}{
                                                    // console.log(value2, "curent value chec😭😭😭")
                                        }
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[240px] rounded-lg bg-white p-0">

                                    <Command>
                                        <CommandInput placeholder="Search currency..." />
                                        <CommandEmpty>No Currency found.</CommandEmpty>
                                        <CommandGroup>
                                            <ScrollArea className="h-72 w-full pl-1 pr-3 pt-4 rounded-lg border">
                                                {labels.map((labels: any) => (
                                                    <CommandItem
                                                        key={labels.value}
                                                        onSelect={(currentValue) => {
                                                            // setValue2(currentValue === value2 ? "" : currentValue)
                                                            // console.log(currentValue, "value going in findLabelByValue😭😭😭")
                                                            setOpen2(false)
                                                            const label = findLabelByValue(currentValue);
                                                            setValue2(label);
                                                            if (label !== 'Select Currency...' && value !== 'Select Currency...') {
                                                                const currency1 = findDetailsByValue(currentValue)
                                                                const currency2 = findDetailsByValue(value)
                                                                if (currency1&&currency2){
                                                                    // console.log("onchange of dropdown 😅🤩😭🤡☠😹", label, "and the other value is", value, "and both division would be, and the currenctValue is ", currency1, currency2);
                                                                    const divisionResultUp = currency1.price / currency2.price;
                                                                    console.log("division result ", divisionResultUp)
                                                                    setInput2val(input1val* divisionResultUp)
                                                                }
                                                            } 
                                                            console.log(label, "value coming from findLabelByValue function and going in state from dropdown😭😭😭")
                                                        }}
                                                        >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                value2 === labels.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        <div className='flex flex-col w-full '>
                                                            {labels.label}
                                                            <Separator className="my-2 bg-slate-200" />
                                                        </div>
                                                    </CommandItem>
                                                ))}
                                            </ScrollArea>
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='justify-center sm:mt-0 mt-2 items-start flex flex-col gap-4'>
                        <div className='w-[330px] sm:w-[380px] active:border-2 active:border-b-slate-900 h-16 sm:h-20 shadow-lg px-3 rounded-xl flex items-center justify-between bg-white'>
                            <div className='flex gap-2 items-center'>
                                <input className='text-left px-2 sm:px-1 w-32 sm:w-36 outline-none border-transparent h-10 sm:h-[78px]  text-lg font-semibold' type='number' value={input2val} onChange={handleChange2} />
                                <Separator orientation="vertical" className=' h-14 bg-gray-300' />
                            </div>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className=" outline-none border-transparent justify-between"
                                    >
                                        {
                                            value
                                                ? labels.find((labels: any) => labels.value === value)?.label
                                                : "Select Currency..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[240px] bg-white p-0">
                                    <Command>
                                        <CommandInput placeholder="Search framework..." />
                                        <CommandEmpty>No Currency found.</CommandEmpty>
                                        <CommandGroup>
                                            <ScrollArea className="h-72 w-full pl-1 pr-3 pt-4 rounded-lg border">
                                                {labels.map((labels: any) => (
                                                    <CommandItem
                                                        key={labels.value}
                                                        onSelect={(currentValue) => {
                                                            setOpen(false)
                                                            const label = findLabelByValue(currentValue);
                                                            setValue(label);
                                                            if (label !== 'Select Currency...' && value2 !== 'Select Currency...') {
                                                                const currency1 = findDetailsByValue(currentValue)
                                                                const currency2 = findDetailsByValue(value2)
                                                                if (currency1&&currency2){
                                                                    const divisionResultUp = currency2.price/currency1.price;
                                                                    // console.log("division result ", divisionResultUp)
                                                                    setInput2val(input2val* divisionResultUp)
                                                                }
                                                            } 
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                value === labels.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        <div className='flex flex-col w-full '>
                                                            {labels.label}
                                                            <Separator className="my-2 bg-slate-200" />
                                                        </div>
                                                    </CommandItem>
                                                ))}
                                            </ScrollArea>
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            {/* <Input type="email" className="rounded-lg " placeholder="Email"/> */}
                        </div>
                    </div>
                    {/* {value2} Value  <br /> {value} Value  <br /> 
                    {input1val} Input Value Of First Input Bar<br /> {input2val} Input Value Of Second Input Bar
                    <br /> {result} division <br /> {resultReverse} division reverse <br /> {answerCheck} Answer of first equation */}
                </div>
            </div>
                            <Github />
        </main>
    )
}
export default HeroSecV3
                                                        // if (value !== 'Select Currency...' && value2 !== 'Select Currency...') {
                                                        //     const currency1 = labels.find((currency: any) => currency.value === value);
                                                        //     const currency2:any = labels.find((currency: any) => currency.value === value2);
                                                    
                                                        //     if (currency1 && currency2) {
                                                        //         const value1Price = currency1.price;
                                                        //         const value2Price = currency2.price;
                                                        //         // console.log(`Price of ${currency1.label}: $${currency1.price}`);
                                                        //         const divisionResultUp = value2Price / value1Price;
                                                        //         const divisionResultDown = value1Price / value2Price;
                                                        //         console.log(`answer = ${divisionResultDown} \n on reverse ${divisionResultDown}:`);
                                                        //         setResult(divisionResultDown * input2val);
                                                        //         // const resl=divisionResultUp*input1val
                                                        //         console.log(`answer  ${input1val} * ${divisionResultUp} ${result} 🤩^_~💋`)
                                                        //         setInput1val(result.toFixed(3))
                                                        //         // const SetResultAbove = divisionResultUp * input1val
                                                        //         // const SetResultDown = divisionResultDown * input2val
                                                        //         // // const calculateValue = (result * input1val).toFixed(2)
                                                        //         // console.log(`answer of the lower input ${input2val} = ${SetResultDown} 🤩^_~💋`)
                                                        //         // setInput1val(SetResultDown)
                                                        //     }
                                                        // }