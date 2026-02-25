import React from 'react'

const Home = () => {
    return (
        <div className="pt-10">
            <div className="w-full h-150 flex gap-4">

                {/* Left Side */}
                <div className="w-1/2 overflow-hidden relative">
                    <img
                        src="/1.png"
                        alt="1"
                        className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col justify-between ">
                        <p className='absolute top-4 left-4 text-white font-bold'>business</p>
                        <div className='absolute bottom-0 left-0 right-0  from-black to-transparent p-4'>
                            <p className="text-white text-sm">description</p>
                            <h1 className="text-white text-2xl font-bold">name</h1>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-1/2 flex flex-col gap-4">

                    {/* Top Section */}
                    <div className="flex flex-1 gap-4 min-h-0">

                        <div className="flex-1 overflow-hidden">
                            <img
                                src="/2.png"
                                alt="2"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex-1 overflow-hidden">
                            <img
                                src="/3.png"
                                alt="3"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                    {/* Bottom Section */}
                    <div className="flex-1 overflow-hidden min-h-0">
                        <img
                            src="/4.png"
                            alt="4"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Home
