import React, { useState, useRef, use, useEffect } from 'react'
import Container from '../shared/Container'
import { BRANDS_DATA } from '../data'
import styles from '../../../styles/styles.module.scss'
import Image from 'next/image'

export default function Brands() {
  const [show, setShow] = useState(true)
  const [active, setActive] = useState(0)
  const slideRef = useRef(null)

  const copy = [...BRANDS_DATA]
  const f = copy.splice(0,2)

  const handleDots = (id) => {
    console.dir(slideRef.current.scrollRight)
    if(slideRef.current && id === 1) {
        slideRef.current.scrollLeft += window.outerWidth
    } 
    if(id === 0) {
        slideRef.current.scrollLeft = 0
    }
    setActive(id)
  }

  useEffect(() => {
    const handleShow = () => {
        if(window.outerWidth <= 770) {
            setShow(false)
        }else {
            setShow(true)
        }
    }

    window.addEventListener('resize', handleShow)
    return () => window.removeEventListener('resize', handleShow)
  }, [])

  console.log(show)

  return (
    <>
        {show &&
        <div className='mt-[120px]'>
        <Container>
            <div className='col-span-full'>
                <div className='w-full'>
                    <div className={`w-full rounded-[26px] gap-[16px] scroll-smooth overflow-x-scroll flex snap-mandatory snap-x ${styles.scroll}`} ref={slideRef}>
                        {BRANDS_DATA.map((elem,index) => {
                            return (
                                <div className={`text-black break-words w-[32.4%] shrink-0 text-white flex justify-between gap-[20px] rounded-[26px]`} style={{backgroundColor: `${elem.class}`}} key={elem.id}>
                                    <div className='ml-[20px] mt-[20px]'>
                                        <div className={`${index === 0 || index === 3 ? 'text-white' : 'text-black'} ${index === 0 || index === 3 ? `bg-[#494949]` : '#FFD1B0'} ${index === 4 ? 'bg-[#F6DE8D]' : '#FFD1B0'} ${index === 5 ? 'bg-[#FFD1B0]' : '#FFD1B0'} mb-[20px] w-[100px] h-[35px] flex justify-center items-center rounded-[8px]`} style={{backgroundColor: `${elem.fontColor}`}}>
                                            <p className={`text-[14px] font-normal leading-[17px] tracking-[0.1em]`}>{elem.logoTitle}</p>
                                        </div>
                                        <Image src={elem.logo} />
                                        <h1 className={`${index === 0 || index === 3 ? 'text-white' : 'text-black'} mb-[20px] mt-[20px] text-[24px] font-semibold leading-[30px]`}>{elem.title}</h1>
                                    </div> 
                                    <div className='relative'>
                                        <Image src={elem.fonImg} />
                                        <div className='absolute right-0 top-[4%]'>
                                            <Image src={elem.url} />
                                        </div>
                                    </div>                                   
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex justify-center gap-[7px] mt-[30px]'>
                    {f.map((elem,index) => {
                        return (
                            <div className={`${active === index ? 'w-[30px] bg-[#008ECC]' : 'w-[8px] bg-[#D9D9D9]'} cursor-pointer transition-all duration-300 rounded-full w-[8px] h-[8px]`} key={elem.id} onClick={() => handleDots(index)} />
                        )
                    })}
                </div>
            </div>
        </Container>
    </div>}
    </>
  )
}
