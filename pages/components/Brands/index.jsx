import React, { useState, useRef, use } from 'react'
import Container from '../shared/Container'
import { BRANDS_DATA } from '../data'
import styles from '../../../styles/styles.module.scss'

export default function Brands() {
  const [show, setShow] = useState(false)
  const slideRef = useRef(null)

  const copy = [...BRANDS_DATA]
  const f = copy.splice(0,2)

  if(slideRef.current) {
    console.log(slideRef.current.offsetWidth)
  }
  const handleDots = (id) => {
    console.dir(slideRef.current.scrollRight)
    if(slideRef.current && id === 1) {
        slideRef.current.scrollLeft += window.outerWidth
    } 
    if(id === 0) {
        slideRef.current.scrollLeft = 0
    }
  }

  return (
    <Container>
        <div className='col-span-full mt-[120px] mb-[158px]'>
            <div className='w-full'>
                <div className={`w-full h-[210px] rounded-[26px] gap-[16px] scroll-smooth overflow-x-scroll flex snap-mandatory snap-x ${styles.scroll}`} ref={slideRef}>
                    {BRANDS_DATA.map(elem => {
                        return (
                            <div className='break-words bg-[#212844] w-[32.4%] shrink-0 text-white flex justify-between gap-[20px] rounded-[26px]' key={elem.id}>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex justify-center gap-[7px]'>
                {f.map((elem,index) => {
                    return (
                        <div className={`cursor-pointer transition-all duration-300 bg-[#D9D9D9] rounded-full w-[8px] h-[8px]`} key={elem.id} onClick={() => handleDots(index)} />
                    )
                })}
            </div>
        </div>
    </Container>
  )
}
