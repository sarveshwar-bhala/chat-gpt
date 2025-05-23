"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
    const router = useRouter()

    return (
        <div
            className="flex flex-col items-center justify-center 
    min-h-screen w-full overflow-hidden
    bg-cover bg-top bg-no-repeat
    bg-[url('/Login-Mobile.png')] 
    sm:bg-[url('/Login.png')]
"
        // style={{ backgroundImage: "url('/Login.png')" }}
        >
            <div
                className="flex flex-col items-center justify-center gap-10 w-full max-w-[90%] sm:max-w-[750px] h-auto bg-contain bg-center bg-no-repeat sm:bg-[url('/loginCardBG.png')]"
            // style={{ backgroundImage: "url('/loginCardBG.png')" }}
            >
                <Image
                    src={"/logo.png"}
                    alt=""
                    width={500}
                    height={500}
                    className="w-40"
                    priority
                />
                <div
                    className="flex flex-col gap-6 items-center rounded-xl p-6 w-full max-w-[90%] sm:w-[500px]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                    }}
                >
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address or phone number*"
                        className="block w-full h-12 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-[#3758F9] placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3758F9] sm:text-sm/6"
                    />
                    <button
                        onClick={() => {
                            router.push("/home")
                        }}
                        type="button"
                        className="rounded-md h-12 w-full bg-[#3758F9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#3758F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3758F9]"
                    >
                        Get Started
                    </button>
                    <p className='text-gray-400'>Don&apos;t have an account? <span className='text-[#3758F9]'>Sign Up</span></p>
                    <div className='flex flex-row justify-between items-center gap-4 my-4 w-full'>
                        <div className='border-b border-b-gray-200 h-0 w-full' />
                        <p className='text-gray-400'>Or</p>
                        <div className='border-b border-b-gray-200 h-0 w-full' />
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='w-full p-2 bg-white rounded-md flex flex-row items-center justify-start h-12'>
                            <Image
                                src={"/google.png"}
                                alt=''
                                width={20}
                                height={20}
                                priority
                            />
                            <div className='flex flex-row justify-center items-center w-full'>
                                <p className='text-[16px] text=[#475569] text-center font-medium'>Continue with Google</p>
                            </div>
                        </div>
                        <div className='w-full p-2 bg-white rounded-md flex flex-row items-center justify-start h-12'>
                            <Image
                                src={"/microsoft.png"}
                                alt=''
                                width={20}
                                height={20}
                                priority
                            />
                            <div className='flex flex-row justify-center items-center w-full'>
                                <p className='text-[16px] text=[#475569] text-center font-medium'>Continue with Microsoft</p>
                            </div>
                        </div>
                        <div className='w-full p-2 bg-white rounded-md flex flex-row items-center justify-start h-12'>
                            <Image
                                src={"/apple.png"}
                                alt=''
                                width={20}
                                height={20}
                                priority
                            />
                            <div className='flex flex-row justify-center items-center w-full'>
                                <p className='text-[16px] text=[#475569] text-center font-medium'>Continue with Apple</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
