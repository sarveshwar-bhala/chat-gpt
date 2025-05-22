import Image from 'next/image'
import React from 'react'
import { BsChat, BsPaperclip } from 'react-icons/bs'
import { CiGrid41 } from 'react-icons/ci'
import { FaRegEdit } from 'react-icons/fa'
import { IoIosSearch, IoMdArrowRoundUp } from 'react-icons/io'
import { MdArrowOutward } from 'react-icons/md'

export default function Home() {
    return (
        <div
            className="bg-cover bg-top bg-no-repeat min-h-screen"
            style={{ backgroundImage: "url('/pageBG.png')" }}
        >
            <div className='flex flex-row justify-start w-full sm:max-h-screen 2xl:min-h-screen sm:w-full 2xl:w-[70%] max-w-7xl sm:mx-5 2xl:mx-auto'>

                <div className='flex flex-col gap-3 mx-10 mr-5 my-8 sm:max-h-screen 2xl:max-h-full w-fit'>
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
                            width={500}
                            height={500}
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
                        className="flex flex-col gap-2 items-start rounded-xl p-6 pb-0 sm:h-[66%] 2xl:h-full w-[340px]"
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
                        <div className='flex flex-col gap-3 h-full overflow-auto mt-4 w-full scrollbar-hide'>
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
                        className="flex flex-col justify-start items-start rounded-xl p-6 py-4 h-fit w-[340px]"
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
                <div className='flex flex-col items-start justify-between gap-3 mx-10 my-8 sm:max-h-screen 2xl:max-h-full w-full'>
                    <div className='flex flex-row justify-between items-center w-full'>
                        <div className='flex flex-row justify-center items-center w-full mr-10'>
                            <Image
                                src={"/logo.png"}
                                alt=""
                                width={500}
                                height={500}
                                className="w-40"
                                priority
                            />
                        </div>
                        <Image
                            src={"/profile.png"}
                            alt=""
                            width={500}
                            height={500}
                            className="w-10 border border-white rounded-full"
                            priority
                        />
                    </div>
                    <div className='flex flex-col gap-4 items-start justify-end w-[800px] h-full mb-12'>
                        <div className='flex flex-row gap-4'>
                            <div className='flex flex-col gap-4'>
                                <div
                                    className="flex flex-col justify-between items-center rounded-xl p-6 pb-0 h-fit w-fit"
                                    style={{
                                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                                    }}
                                >
                                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-medium text-3xl max-w-56">
                                        Study Assistance
                                    </h2>
                                    <div className='flex flex-row justify-end w-full'>
                                        <Image
                                            src={"/home_study.png"}
                                            alt=''
                                            className='h-16 w-28'
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex flex-row justify-between items-center rounded-xl p-6 h-fit w-fit"
                                    style={{
                                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                                    }}
                                >
                                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-medium text-2xl max-w-56">
                                        Entertainment and Fun
                                    </h2>
                                </div>

                            </div>
                            <div
                                className="flex flex-col justify-between items-start rounded-xl p-6 pb-0 h-full w-fit"
                                style={{
                                    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                                    borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                                }}
                            >
                                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-medium text-2xl max-w-56">
                                    Organization and Productivity
                                </h2>
                                <Image
                                    src={"/iconGroup.png"}
                                    alt=''
                                    className='px-6 pt-6'
                                    height={500}
                                    width={260}
                                    priority
                                />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div
                                    className="flex flex-row justify-between items-center rounded-xl p-6 py-8 h-fit w-fit"
                                    style={{
                                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                                    }}
                                >
                                    <p
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-medium text-2xl max-w-56"
                                    >
                                        Social & Emotional Support
                                    </p>
                                    <Image
                                        src={"/social.png"}
                                        alt=''
                                        className='-mt-0'
                                        height={60}
                                        width={60}
                                        priority
                                    />
                                </div>
                                <div
                                    className="flex flex-row justify-between items-center rounded-xl p-6 h-fit w-full"
                                    style={{
                                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                                    }}
                                >
                                    <p
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-medium text-3xl max-w-56"

                                    >
                                        Relationship Building
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-row gap-4 w-full'>
                            <div className='flex flex-col gap-4 w-full'>
                                <div
                                    className="flex flex-col justify-between items-start rounded-xl p-6 h-full"
                                    style={{
                                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                                    }}
                                >
                                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-normal text-2xl">
                                        Personal Development
                                    </h2>
                                </div>
                                <div
                                    className="flex flex-row justify-between items-center rounded-xl p-6 h-full"
                                    style={{
                                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                                    }}
                                >
                                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-normal text-2xl">
                                        Life Prep
                                    </h2>
                                    <div className='flex flex-row justify-between'>

                                        <Image
                                            src={"/careerExplore1.png"}
                                            alt=''
                                            className='h-12 w-12'
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                        <Image
                                            src={"/careerExplore2.png"}
                                            alt=''
                                            className='h-12 w-12'
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                        <Image
                                            src={"/careerExplore3.png"}
                                            alt=''
                                            className='h-12 w-12'
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex flex-col justify-between items-start rounded-xl p-6 pb-0 h-full w-full"
                                style={{
                                    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                                    borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                                }}
                            >
                                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-normal text-2xl">
                                    Online Presence and Tech Help
                                </h2>
                                <div className='flex flex-row justify-end w-full'>
                                    <Image
                                        src={"/smilie.png"}
                                        alt=''
                                        className='h-28 w-44'
                                        width={500}
                                        height={500}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-row justify-between items-center rounded-xl p-3 px-6 h-fit w-[800px]"
                        style={{
                            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Hi Alex, What can I help you with today?"
                            className="text-[18px] font-medium text-gray-600 w-full focus:outline-none focus:ring-0 focus:border-none"
                        />

                        <div className='flex flex-row gap-4 items-center'>
                            <BsPaperclip className='h-8 w-8 text-gray-400' />
                            <div className='h-10 w-10 bg-blue-600 rounded-full p-2'>
                                <IoMdArrowRoundUp className='h-6 w-6 text-white' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
