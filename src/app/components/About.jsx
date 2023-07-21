import React from 'react'

const About = () => {
    return (
        <div id='about'className='w-100 items-center md:h-screen flex p-4 py-10' id='about'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 p-4'>
                    <p className='text-2xl font-bold text-[#294f6c]'>ABOUT</p>
                    <h2 className='py-5'>Who I Am</h2>
                    <p><span className='text-[#294f6c] text-7xl font-bold'>I</span>'m Baibhav Rajkumar and i live in Guwahati, Assam.I did my <b>Master's in Computer
                        Applications(MCA)</b> from <span className='font-bold text-2xl md:text-3xl'>UNIVERSITY OF SCIENCE AND TECHNOLOGY,MEGHALAYA </span>
                        <img src="ustm.png" width={50} height={50} alt="" />
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
                    <img className='p-4 rounded-xl' src="me.jpeg"  alt="" />
                </div>

            </div>
        </div>
    )
}

export default About
