import React from 'react'
import Container from '../shared/Container'
import Image from 'next/image'
import { PROD_DATA } from '../data'
import styles from './styles.module.scss'
import arrowBlueIcon from '../../../public/arrowBlue-icon.svg'

export default function Product() {
  return (
    <Container>
        <div className='col-span-full'>
            <div className='mb-[47px] mt-[120px] relative'>
                <div className=''>
                    <p className='text-[24px] font-bold leading-[70px] text-[#666666]'>Grab the best deal on <span className='text-[#008ECC]'>Smartphones</span></p>
                    <div className='hidden md:flex justify-center gap-[6px] absolute right-0 top-[44%]'>
                        <p className='font-medium text-[16px] leading-[18px] text-[#222222]'>View All</p>
                        <Image src={arrowBlueIcon} alt='arrow' />
                    </div>
                </div>                
                <div className='w-[28%] h-[5px] bg-[#008ECC] rounded-full' />
                <div className='bg-[#EDEDED] h-[1px] w-full' />
            </div>
            <div className='w-full flex justify-between gap-[16px] flex-wrap'>
                {PROD_DATA.map(elem => {
                    return (
                        <div className={`w-[45%] md:w-[30%] lg:w-[18%] relative rounded-[16px] border-[1px] border-[#EDEDED] rounded-full`}>
                            <div className={`h-[60%] flex justify-center items-center pt-[16px] bg-[#EDEDED] pb-[16px] ${styles.rounded}`}>
                                <div className='w-[126px] flex justify-center'>
                                    <Image src={elem.url} alt='phone' />
                                </div>
                                <div className={`bg-[#008ECC] w-[51px] h-[53px] absolute right-0 top-0 ${styles.radius}`}>
                                    <p className='font-semibold text-[14px] leading-[16px] text-white mt-[10px] mx-[12px]'>56% OFF</p>
                                </div>
                            </div>
                            <div className='ml-[12px] mt-[12px]'>
                                <h3 className='mb-[10px]'>{elem.title}</h3>
                                <h3 className='mb-[10px]'><b className='mr-[10px]'>{elem.price}</b>{elem.lastPrice}</h3>
                                <div className='w-[94%] h-[2px] bg-[#EDEDED] mb-[10px]' />
                                <h3 className='text-[#249B3E] mb-[50px] md:mb-0'>{elem.savePrice}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </Container>
  )
}
