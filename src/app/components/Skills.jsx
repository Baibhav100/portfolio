import React from 'react'
import Image from 'next/image'
const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1024px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#294f6c]'>Skills</p>
                <h2>What I Can Do?</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 p-3'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/html.png' width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>

                            </div>

                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/css.png' width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>

                            </div>

                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/javascript.png' width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVASCRIPT</h3>

                            </div>

                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/node.png' width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NODE.JS</h3>

                            </div>

                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/react.png' width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REACT.JS</h3>

                            </div>

                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/nextjs.png' width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NEXT.JS</h3>

                            </div>

                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/tailwind.png' width={64} height={64} />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TAILWIND</h3>

                            </div>

                        </div>
                    </div>
                    



                </div>

            </div>

        </div>
    )
}

export default Skills
