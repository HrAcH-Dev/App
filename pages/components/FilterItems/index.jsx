import React, { useState } from 'react'
import Image from 'next/image'
import Container from '../shared/Container'
import arrowDown from '../../../public/arrow-down.svg'
import { FILTER_DATA } from '../data'

export default function FilterItems() {
  const [show, setShow] = useState(1)

  const handleClick = (id) => {
    setShow(id)
  }

  return (
    <div className='xl:block hidden border-b-2 border-[#EDEDED]'>
        <Container>
            <div className='col-span-full flex justify-around gap-[14px]'>
                {FILTER_DATA.map(elem => {
                    return (
                        <div className={`${show === elem.id ? "bg-[#008ECC]" : "bg-[#F3F9FB]"} cursor-pointer mt-[17px] mb-[17px]  text-white gap-[6px] rounded-[26px] pr-[14px]`} key={elem.id} onClick={() => handleClick(elem.id)}>
                            <div className='flex justify-center'>
                                <h3 className={` ${show === elem.id ? 'text-white' : 'text-black'} ml-[14px] my-[9px] mr-[6px]`}>{elem.title}</h3>
                                <Image src={arrowDown} width={18} height={18} alt='icon' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    </div>
  )
}
