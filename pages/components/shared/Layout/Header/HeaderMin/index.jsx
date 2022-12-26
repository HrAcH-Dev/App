import React from 'react'
import Container from '../../../Container'
import Image from 'next/image'
import trackIcon from '../../../../../../public/track-icon.svg'
import locationIcon from '../../../../../../public/location-icon.svg'
import discoutIcon from '../../../../../../public/discout-icon.svg'
import styles from '../styles.module.scss'

export default function HeaderMin() {
  return (
    <div className='hidden xl:block xl:bg-[#F5F5F5] xl:h-[42px] xl:w-full xl:pt-[8px]'>
        <Container>
            <div className='col-span-4 flex items-center'>
                <h1 className='font-normal text-[14px] leading-[14px] text-[#666666]'>Welcome to worldwide Megamart!</h1>
            </div>
            <div className={`col-span-5 col-start-8 flex justify-evenly ${styles.divs}`}>
                <div>
                    <Image src={locationIcon} width={18} height={18} alt='headeicon' />
                    <h3 className='text-[#666666]'>Deliver to <p className='pl-[3px] text-[#666666] font-medium'>423651</p></h3>
                    <div className='ml-[30px] w-[2px] h-[25px] bg-[#D9D9D9] rounded-[3px]' />
                </div>
                <div>
                    <Image src={trackIcon} width={18} height={18} alt='headeicon' />
                    <h3>Track your order</h3>
                    <div className='ml-[30px] w-[2px] h-[25px] bg-[#D9D9D9] rounded-[3px]' />
                </div>
                <div>
                    <Image src={discoutIcon} width={18} height={18} alt='headeicon' />
                    <h3>All Offers</h3>
                </div>
            </div>
        </Container>
    </div>
  )
}
