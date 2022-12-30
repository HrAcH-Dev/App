import React from 'react'
import Container from '../../Container'
import footerIcon from '../../../../../public/footer-icon.svg'
import watssupIcon from '../../../../../public/watssup-icon.svg'
import callIcon from '../../../../../public/call-icon.svg'
import appleStoreIcon from '../../../../../public/applestore-icon.svg'
import googleStoreIcon from '../../../../../public/googlestore-icon.svg'
import Image from 'next/image'
import { FOOTER_LIST, FOOTER_PAGES } from '../../../data'

export default function Footer() {
  return (
    <div className='w-full bg-[#008ECC] text-white pt-[80px]'>
      <Container>
        <div className='col-span-full md:col-span-4'>
          <Image src={footerIcon} width={217} height={44} />
          <div className='mt-[34px]'>
            <h1 className='pb-[20px] text-[20px] font-bold leading-[20px]'>Contact Us</h1>
            <div className=''>
              <div className='flex justify-start gap-[11px]'>
                <Image src={watssupIcon} />
                <p >Whats App</p>
              </div>
              <p className='pl-[33px]'>+1 202-918-2132</p>
            </div>
            <div className='mt-[21px]'>
              <div className='flex justify-start gap-[11px]'>
                <Image src={callIcon} />
                <p>Call Us</p>
              </div>
              <p className='pl-[33px]'>+1 202-918-2132</p>
            </div>
          </div>
          <div className='mb-[25px] md:mb-0'>
            <h2 className='pb-[20px] pt-[30px]'>Download App</h2>
            <div className='flex justify-start gap-[20px]'>
              <Image src={appleStoreIcon} />
              <Image src={googleStoreIcon} />
            </div>
          </div>
        </div>
        <div className='col-span-full md:col-span-4 lg:col-start-6 lg:col-span-3'>
          <h1 className='mb-[16px] text-[20px] leading-[20px] font-semibold'>Most Popular Categories</h1>
          <div className='w-[35%] md:w-[54%] h-[3px] bg-white rounded-[16px] mb-[20px]' />
          <div>
            {FOOTER_LIST.map((elem, index) => <li className='text-[15px] mb-[5px]' key={index}>{elem}</li>)}
          </div>
        </div>
        <div className='col-span-2 md:col-start-5 md:col-span-4 lg:col-start-10 lg:col-span-3'>
          <h1 className='mb-[16px] text-[20px] leading-[20px] font-semibold '>Customer Services</h1>
          <div className='w-[42%] h-[3px] bg-white rounded-[16px] mb-[20px]' />
          <div>
            {FOOTER_PAGES.map((elem, index) => <li className='text-[15px] mb-[5px]' key={index}>{elem}</li>)}
          </div>
        </div>
        <div className='col-span-full text-center'>
          <div className='w-full h-[1px] bg-[#05ABF3] rounded-[16px] mb-[30px]' />
          <h3 className='text-[20px] leading-[20px] font-normal mb-[30px]'>© 2022 All rights reserved. Reliance Retail Ltd.</h3>
        </div>
      </Container>
    </div>
  )
}
