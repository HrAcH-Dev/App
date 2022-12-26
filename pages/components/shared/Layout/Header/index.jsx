import React from 'react'
import Container from '../../Container'
import styles from './styles.module.scss'
import Image from 'next/image'
import megaMartIcon from '../../../../../public/megamart-icon.svg'
import searchIcon from '../../../../../public/search-icon.svg'
import listIcon from '../../../../../public/list-icon.svg'
import userIcon from '../../../../../public/user-icon.svg'
import buyIcon from '../../../../../public/buy-icon.svg'

export default function Header() {
  return (
    <div className='w-full border-b-2 border-[#EDEDED] bg-white'>
        <Container>
            <div className='col-span-3 flex justify-start cursor-pointer'>
                <div className={`bg-[#F3F9FB] w-[48px] h-[48px] rounded-[10px] my-[21px] pt-[14px] mr-[16px]  ${styles.items}`}>
                    <div className='w-[26px]'/>
                    <div className='w-[19px]'/>
                    <div className='w-[13px]'/>
                </div>
                <Image src={megaMartIcon} width={138} height={28} alt='headeicon' />
            </div>
            <div className='hidden md:flex md:col-start-7 col-span-6 xl:col-span-5 col-start-5 bg-[#F3F9FB] h-[55px] items-center rounded-[10px] mt-[21px]'>
              <div className='ml-[18px] flex w-full cursor-pointer pr-[16px]'>
                <Image src={searchIcon} width={18} height={18} alt='headeicon' />
                <input type="text" placeholder='Search essentials, groceries and more...' className='placeholder:text-[14px] placeholder:font-normal placeholder:leading-[18px] ml-[12px] bg-transparent w-full outline-none' />
                <Image src={listIcon} width={24} height={24} alt='headeicon' />
              </div>
            </div>
            <div className='hidden xl:block col-span-3 col-start-10 mt-[33px] cursor-pointer'>
              <div className='ml-[36px] w-full flex justify-start items-center'>
                <Image src={userIcon} width={24} height={24} alt='headeicon' />
                <h3 className='pl-[6px] text-[#666666] text-[16px] leading-[18px] font-bold'>Sign Up/Sign In</h3>
                <div className='w-[2px] h-[25px] mx-[20px] bg-[#D9D9D9] rounded-[3px]' />
                <Image src={buyIcon} width={24} height={24} alt='headeicon' />
                <h3 className='pl-[6px] text-[#666666] text-[16px] leading-[18px] font-bold'>Cart</h3>
              </div>
            </div>
        </Container>
    </div>
  )
}
