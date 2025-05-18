import Image from 'next/image'
import React from 'react'
import { BsChat, BsPaperclip } from 'react-icons/bs'
import { CiGrid41 } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { MdArrowOutward } from 'react-icons/md'

export default function Home() {
    return (
        <div
            className="flex flex-row justify-start w-full min-h-screen bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/pageBG.png')" }}
        >
            <div className='flex flex-col gap-3 mx-10 my-8 min-h-full w-full'>
                <div
                    className="flex flex-row justify-between items-center rounded-xl p-6 h-fit w-[340px]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                    }}
                >
                    <Image
                        src={"/logo.png"}
                        alt=""
                        width={50}
                        height={50}
                        className="w-24"
                        priority
                    />
                    <FaRegEdit className='h-5 w-5' />

                </div>
                <div
                    className="flex flex-row gap-2 items-center rounded-xl p-6 h-fit w-[340px]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                    }}
                >
                    <CiGrid41 className='h-5 w-5 text-[#111928]' />
                    <p className='text-[#111928] font-medium text-[18px]'>Explore GPTs</p>
                </div>
                <div
                    className="flex flex-col gap-2 items-start rounded-xl p-6 pb-0 h-full w-[340px]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                    }}
                >
                    <div className='flex flex-row gap-2 items-center'>
                        <BsChat className='h-4 w-4 text-[#111928]' />
                        <p className='text-[#111928] font-medium text-[18px]'>Chat</p>
                    </div>
                    <div className="mt-2 grid grid-cols-1 w-full">
                        <input
                            id="account-number"
                            name="account-number"
                            type="text"
                            placeholder="Search"
                            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6"
                        />
                        <IoIosSearch
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                        />
                    </div>
                    <div className='flex flex-col gap-3 h-[350px] overflow-auto mt-4 w-full scrollbar-hide'>
                        <div className='flex flex-col gap-2 w-full'>

                            <p className='text-black font-medium text-[16px]'>Today</p>
                            <div className='flex flex-col gap-1 border border-gray-200 rounded-md p-4 w-full'>
                                <p className='text-[#233178] font-medium text-[14px]'>Unraveling the Past</p>
                                <div className='border-b border-b-gray-200 my-2' />
                                <p className='text-[#233178] font-medium text-[14px]'>Unraveling the Past</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>

                            <p className='text-black font-medium text-[16px]'>Yesterday</p>
                            <div className='flex flex-col gap-1 border border-gray-200 rounded-md p-4 w-full'>
                                <p className='text-[#233178] font-medium text-[14px]'>Math Made Easy</p>
                                <div className='border-b border-b-gray-200 my-2' />
                                <p className='text-[#233178] font-medium text-[14px]'>Study Squad Goals</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>

                            <p className='text-black font-medium text-[16px]'>02 Days ago</p>
                            <div className='flex flex-col gap-1 border border-gray-200 rounded-md p-4 w-full'>
                                <p className='text-[#233178] font-medium text-[14px]'>Kitchen Newbie</p>
                                <div className='border-b border-b-gray-200 my-2' />
                                <p className='text-[#233178] font-medium text-[14px]'>Job Juggler</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start items-start rounded-xl p-6 h-fit w-[340px]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                    }}
                >
                    <div className='flex flex-row justify-between items-center w-full'>
                        <p className='text-black font-medium text-[16px]'>Upgrade plan</p>
                        <MdArrowOutward className='h-5 w-5 text-black' />
                    </div>
                    <p className='text-gray-500 font-normal text-[16px]'>More access to better models</p>

                </div>
            </div>
            <div className='flex flex-col items-start justify-between gap-3 mx-10 my-8 min-h-full w-full'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <div className='flex flex-row justify-star items-center w-full'>
                        <Image
                            src={"/logo.png"}
                            alt=""
                            width={100}
                            height={100}
                            className="w-40"
                            priority
                        />
                    </div>
                    <Image
                        src={"/profile.png"}
                        alt=""
                        width={100}
                        height={100}
                        className="w-10 border border-white rounded-full"
                        priority
                    />
                </div>
                {/* <div className='flex flex-col justify-end items-start gap-10'>
                    <div>

                    </div>
                    <div
                        className="flex flex-row justify-between items-center rounded-xl p-6 h-full w-[900px]"
                        style={{
                            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                        }}
                    >
                        <p className='text-[18px] font-medium text-gray-600'>Hi Alex, What can I help you with today?</p>
                        <BsPaperclip />
                    </div>
                </div> */}
            </div>
           

        </div>
    )
}
