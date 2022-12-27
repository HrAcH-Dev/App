import React from 'react'
import Container from '../shared/Container'
import Image from 'next/image'
import arrowBlueIcon from '../../../public/arrowBlue-icon.svg'
import { SHOP_DATA } from '../data'

export default function Shop() {
  return (
    <Container>
        <div className='col-span-full'>
            <div className='mb-[47px] mt-[120px] relative'>
                <div className=''>
                    <p className='text-[24px] font-bold leading-[70px] text-[#666666]'>Shop From <span className='text-[#008ECC]'>Top Categories</span></p>
                    <div className='hidden md:flex justify-center gap-[6px] absolute right-0 top-[44%]'>
                        <p className='font-medium text-[16px] leading-[18px] text-[#222222]'>View All</p>
                        <Image src={arrowBlueIcon} alt='arrow' />
                    </div>
                </div>                
                <div className='w-[21%] h-[5px] bg-[#008ECC] rounded-full' />
                <div className='bg-[#EDEDED] h-[1px] w-full' />
            </div>
            <div className='w-full flex justify-between w-[80%] md:w-auto mx-auto md:mx-0 gap-[20px] md:gap-[20px] flex-wrap'>
                {SHOP_DATA.map(elem => {
                    return (
                        <div className='cursor-pointer flex flex-col justify-start flex-wrap'>
                            <div className='mx-auto w-[132px] h-[132px] flex justify-center bg-[#F5F5F5] rounded-full'>
                                <Image src={elem.url} alt='shopicon' />
                            </div>
                            <div className='text-center mt-[20px]'>
                                <p className='text-[#222222] text-[16px] leading-[20px] font-medium'>{elem.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </Container>
  )
}
