import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Container from '../shared/Container'
import { SLIDER_DATA } from '../data'
import styles from '../../../styles/styles.module.scss'
import slideImgIcon from '../../../public/slideimg-icon.svg'
import watchIcon from '../../../public/watch-icon.svg'
import arrowRight from '../../../public/arrow-right.svg'

export default function Slider() {
  const [active, setActive] = useState(0)
  console.log(active)
  const slideRef = useRef(null)
  let widthDec

  const handlePrev = () => {
    widthDec = slideRef.current.childNodes[0].getBoundingClientRect().width + 5
    if(slideRef.current) {
        slideRef.current.scrollLeft -= widthDec
    }
  }

  const handleNext = () => {
    widthDec = slideRef.current.childNodes[0].getBoundingClientRect().width + 5
    if(slideRef.current) {
        slideRef.current.scrollLeft += widthDec
    }
  }

  const handleDots = (id) => {
    if (slideRef.current) {
      slideRef.current.scrollLeft = id * slideRef.current.childNodes[0].getBoundingClientRect().width + id * 5 
      setActive(id)
    }
  }

  return (
    <Container>
        <div className='col-span-full mt-[20px]'>
            <div className='w-full relative'>
                <div className={`w-full rounded-[26px] gap-[5px] scroll-smooth overflow-x-scroll flex snap-mandatory snap-x ${styles.scroll}`} ref={slideRef}>
                    {SLIDER_DATA.map(elem => {
                        return (
                            <div className='break-words bg-[#212844] w-full  shrink-0 text-white flex justify-between gap-[20px] rounded-[26px]' key={elem.id}>
                                <div className='ml-[50px] md:ml-[90px] mt-[50px] mb-[120px]'>
                                    <h3 className='text-[30px] leading-[30px] font-semibold mb-[20px]'>{elem.title}</h3>
                                    <h1 className='text-[47px] md:text-[63px] font-bold leading-[63px] mb-[20px]'>{elem.name}</h1>
                                    <h3 className='text-[30px] leading-[30px] font-semibold'>{elem.price}</h3>
                                </div>
                                <div className='relative'>
                                    <div>
                                        <Image src={slideImgIcon} alt='icon' />
                                    </div>
                                    <div className='absolute top-[24px] right-[124px]'>
                                        <Image src={watchIcon} alt='icon' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className='absolute left-[16%] md:left-[6.6%] bottom-[14%] z-50 flex justify-center gap-[7px]'>
                        {SLIDER_DATA.map((elem,index) => {
                            return (
                                <div className={`${active === index ? 'w-[30px]' : 'w-[8px]'} cursor-pointer transition-all duration-300 bg-white rounded-full w-[8px] h-[8px]`} key={elem.id} onClick={() => handleDots(index)} />
                            )
                        })}
                    </div>
                </div>
                <div className='absolute -left-[4.50%] top-[35%] md:top-[29%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-white rounded-full flex justify-center items-center'>
                    <button className='w-[43px] h-[43px] md:w-[86px] md:h-[86px] bg-[#F3F9FB] rounded-full flex justify-center items-center cursor-pointer' onClick={handlePrev}>
                        <span>
                            <Image src={arrowRight} width={24} height={24} alt='icon' />
                        </span>
                    </button>
                </div>
                <div className='absolute -right-[4.50%] top-[35%] md:top-[29%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-white rounded-full flex justify-center items-center'>
                    <button className='w-[43px] h-[43px] md:w-[86px] md:h-[86px] bg-[#F3F9FB] rounded-full flex justify-center items-center cursor-pointer' onClick={handleNext}>
                        <span className='rotate-180'>
                            <Image src={arrowRight} width={24} height={24} alt='icon' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </Container>
  )
}
