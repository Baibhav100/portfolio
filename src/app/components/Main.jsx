import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
                    <h1 className='text-gray-800'>Hi, I'm <span className='text-[#294f6c]'>Baibhav</span> </h1>
                    <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                    <p className='py-4 text-gray-700 max-w-[70%] mx-auto'>I'm a Front-End Web Developer having the skills in <b>HTML, CSS, JAVASCRIPT</b> mainly.I have learnt all the important
                        skills from watching online youtube tutorials which i get online.I, also just started learning a little bit of
                        <b> REACT.js</b> (library of javascript) along with <b>Tailwindcss</b>
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
                           <a href='https://www.linkedin.com/in/baibhav-rajkumar-3893a5240/'><FaLinkedinIn/></a> 
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
                        <a href='https://github.com/'><FaGithub /></a> 
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 duration-200'>
                            <AiOutlineMail />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main
