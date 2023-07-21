import React from 'react'
import Image from 'next/image'

const Experiences = () => {
  return (
    <div id='experience' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1024px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#294f6c]'>Experiences</p>
     
        <div className=' grid md:grid-cols-2 lg:grid-cols-4 p-3'>

          <div className='p-3 rounded-md shadow-md hover:scale-105 ease-in duration-300'>
            <div className=' grid justify-center items-center m-auto'>
              <div className='m-auto'>
                <Image src='/ekodus.png' width={69} height={69} />
              </div>
            </div>
          </div>
          <div className='w-full tracking-widest  lg:col-span-3 flex flex-col items-center justify-between'>
                <p className='italic p-4'>I worked as a <span className='md:text-xl'>Frontend Developer</span>(intern) at <span className='md:text-3xl'>Ekodus Technologies Pvt. Ltd,Guwahati(Assam) for 5 months</span></p>

              </div>

        </div>
      </div>
    </div>
  )
}

export default Experiences
