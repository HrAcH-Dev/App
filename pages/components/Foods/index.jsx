import React from 'react'
import Container from '../shared/Container'
import { FOOD_DATA } from '../data'
import arrowBlueIcon from '../../../public/arrowBlue-icon.svg'
import Image from 'next/image'
import styles from '../Product/styles.module.scss'

export default function Foods() {
  return (
    <div className='mb-[100px]'>
      <Container>
            <div className='col-span-full'>
                <div className='mb-[47px] mt-[120px] relative'>
                    <div className=''>
                        <p className='text-[24px] font-bold leading-[70px] text-[#666666]'>Daily <span className='text-[#008ECC]'>Essentials</span></p>
                        <div className='hidden md:flex justify-center gap-[6px] absolute right-0 top-[44%]'>
                            <p className='font-medium text-[16px] leading-[18px] text-[#222222]'>View All</p>
                            <Image src={arrowBlueIcon} alt='arrow' />
                        </div>
                    </div>                
                    <div className='w-[12.2%] h-[5px] bg-[#008ECC] rounded-full' />
                    <div className='bg-[#EDEDED] h-[1px] w-full' />
                </div>
                <div className='w-full flex justify-between gap-[16px] flex-wrap'>
                    {FOOD_DATA.map(elem => {
                        return (
                            <div className={`w-[45%] md:w-[30%] lg:w-[15%]`}>
                                <div className='h-[187px] relative rounded-[16px] border-[1px] border-[#EDEDED] flex justify-center items-center bg-[#F5F5F5]'>
                                    <Image src={elem.url} />
                                </div>
                                <div className='text-center'>
                                    <p className='pt-[20px] pb-[4px] text-[#666666] text-base font-semibold leading-[16px]'>{elem.title}</p>
                                    <h2 className='text-[#222222] text-[20px] leading-[20px] font-bold'>{elem.priceTitle}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
      </Container>
    </div>
  )
}
