import React from 'react'
import logo from './logo-black.svg'
import star from './star-black.svg'
import Image from 'next/image'
import { TextMorph } from '../ui/text-morph'

const Logo = () => {
  const [text, setText] = React.useState('bigbang.pro')
  return (
    <div
    
     onMouseEnter={() => setText('bigbang.pro')}
     onMouseLeave={() => setText('bbg.pro')}
     className='w-fit group px-4'>
    <div className='flex  gap-2 items-center justify-center'>
      <div className='relative'>
        <Image src={logo} alt="logo" width={30} height={30} />
        <Image src={star} alt="star" className='absolute duration-200 group-hover:scale-[1.3] group-hover:rotate-[180deg] -top-1 -right-2' width={15} height={15} />
      </div>
      <span className=' text-xl mt-2'>
        <TextMorph>{text}</TextMorph>
      </span>
    </div>
    </div>
  )
}

export default Logo