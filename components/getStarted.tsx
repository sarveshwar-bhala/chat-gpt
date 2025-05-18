import React from 'react'

export default function GetStarted() {
    return (
        <div className='mt-10'>
            <div
                className="flex flex-roe justify-between items-center rounded-xl  p-6 h-48 w-full"
                style={{
                    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                    borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                }}
            >

                <div className='flex flex-col justify-between items-start'>
                    <p
                        className="text-transparent bg-clip-text font-semibold text-xl h-10"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, #0064FE 0%, #FFFFFF 100%)'
                        }}

                    >
                        Get Started
                    </p>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-[28px] -mt-4">
                        Jump In—It&apos;s Easy!
                    </h2>
                    <p className='text-[#757575]/50 font-bold text-md w-[50%] mt-2'>
                        No hidden costs, no strings attached. Chat on your phone, tablet, or laptop.
                    </p>
                </div>
                <div className="flex flex-row gap-4">
                    <button
                        type="button"
                        className="rounded-lg bg-[#007DFC] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#007DFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007DFC]"
                    >
                        Get started
                    </button>
                    <button
                        type="button"
                        className="rounded-lg bg-white px-3.5 py-2.5 text-sm font-semibold text-[#007DFC] shadow-xs ring-1 ring-[#007DFC] ring-inset hover:bg-gray-50"
                    >
                        Know more
                    </button>
                </div>
            </div>
        </div>
    )
}
