import Image from 'next/image'
import React from 'react'
import { MdOutlineMicNone } from 'react-icons/md'

export default function HomePage() {
    return (
        <div
            className='flex flex-row gap-4 mt-10'
        >
            <div className='flex flex-col gap-4 w-[100%]'>
                <div className='flex flex-row gap-4'>
                    {/* <div className="flex flex-col gap-5 rounded-xl bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-xl p-6 shadow-md shadow-black/10 "> */}
                    <div
                        className="flex flex-col justify-between rounded-xl  p-6 h-48 w-1/3"
                        style={{
                            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                        }}
                    >

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-2xl max-w-56">
                            Mood-Based
                            Conversations
                        </h2>
                        <div className="bg-white rounded-md py-4 px-2 shadow-sm">
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#95A4FC] to-[#1C1C1C] font-bold text-sm'>
                                Hi ALex, How are you feeling today?
                            </p>
                        </div>

                    </div>
                    <div
                        className="flex flex-col justify-between rounded-xl  p-6 w-1/3"
                        style={{
                            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                        }}
                    >
                        <div className='flex flex-row justify-between'>

                            <Image
                                src={"/careerExplore1.png"}
                                alt=''
                                className='h-20 w-20'
                                width={500}
                                height={500}
                                priority
                            />
                            <Image
                                src={"/careerExplore2.png"}
                                alt=''
                                className='h-20 w-20'
                                width={500}
                                height={500}
                                priority
                            />
                            <Image
                                src={"/careerExplore3.png"}
                                alt=''
                                className='h-20 w-20'
                                width={500}
                                height={500}
                                priority
                            />
                        </div>
                        {/* <div className="bg-white rounded-md py-4 px-2 shadow-sm"> */}
                        <p className='text-[#757575]/50 font-bold text-md'>
                            Career Exploration, College Prep, Budgeting Basics
                        </p>
                        {/* </div> */}

                    </div>
                    <div
                        className="flex flex-col justify-between rounded-xl  p-6  w-1/3"
                        style={{
                            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                        }}
                    >


                        <p
                            className="text-transparent bg-clip-text font-semibold text-xl h-10"
                            style={{
                                backgroundImage: 'linear-gradient(to bottom, #0064FE 0%, #FFFFFF 100%)'
                            }}

                        >
                            Online and Tech Help
                        </p>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-[28px] max-w-56 ">
                            {"Social Media & Basic Coding".toUpperCase()}
                        </h2>

                    </div>
                </div>
                <div className='flex flex-row justify-start gap-4'>
                    <div
                        className="flex flex-col items-center justify-between rounded-xl h-[500px] w-1/3"
                        style={{
                            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),rgba(255, 255, 255, 0.6)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                        }}
                    >

                        <p
                            className="text-transparent bg-clip-text font-semibold text-xl px-6 pt-6 pb-6"
                            style={{
                                backgroundImage: 'linear-gradient(to bottom, #0064FE 0%, #FFFFFF 100%)'
                            }}

                        >
                            Homework Helper
                        </p>
                        <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-3xl px-6 -mt-10">
                            Explain complex topics in simple terms
                        </h2>
                        <Image
                            src="/homework.png"
                            alt="Homework"
                            className="object-fill w-full"
                            width={1000}
                            height={1000}
                            priority
                        />
                        <div className="bg-white rounded-md py-4 px-2 shadow-sm m-6">
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#95A4FC] to-[#1C1C1C] font-bold text-sm text-center'>
                                Can you help me understand Newton’s laws?
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center justify-end rounded-xl h-[500px] w-2/3"
                        style={{
                            background: `linear-gradient(to right, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.25) 100%),rgba(255, 255, 255, 0)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                        }}
                    >

                        <Image
                            src="/mobile.png"
                            alt="Homework"
                            className="object-contain h-[450px]"
                            width={1000}
                            height={1000}
                            priority
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-start gap-4'>
                    <div
                        className="flex flex-row justify-between rounded-xl  h-48 w-2/3"
                        style={{
                            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                        }}
                    >
                        <div className='flex flex-col gap-3 p-6 '>
                            <div>
                                <p
                                    className="text-transparent bg-clip-text font-semibold text-xl h-10"
                                    style={{
                                        backgroundImage: 'linear-gradient(to bottom, #0064FE 0%, #FFFFFF 100%)'
                                    }}

                                >
                                    Organization and Productivity
                                </p>
                                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-[28px] -mt-2">
                                    Planner and Scheduler
                                </h2>
                            </div>
                            <p className='text-[#757575]/50 font-bold text-md w-56'>
                                How do I balance studying
                                and soccer practice?
                            </p>
                        </div>
                        <Image
                            src={"/iconGroup.png"}
                            alt=''
                            className='px-6 pt-6'
                            height={500}
                            width={260}
                            priority
                        />


                    </div>
                    <div
                        className="flex flex-col justify-between rounded-xl  p-6 h-48 w-1/3"
                        style={{
                            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                        }}
                    >

                        <div className='flex flex-row justify-between items-center'>
                            <p
                                className="text-transparent bg-clip-text font-semibold text-xl h-28 w-32"
                                style={{
                                    backgroundImage: 'linear-gradient(to bottom, #0064FE 0%, #FFFFFF 100%)'
                                }}

                            >
                                Social & Emotional Support
                            </p>
                            <Image
                                src={"/social.png"}
                                alt=''
                                className='-mt-8'
                                height={60}
                                width={60}
                                priority
                            />

                        </div>
                        <p className='text-[#757575]/50 font-bold text-md'>
                            Advice and Guidance
                        </p>

                    </div>

                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div
                    className="flex flex-col justify-between rounded-xl p-6 h-full w-[340px]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                    }}
                >

                    <div className='flex flex-col gap-3 items-end'>
                        <div
                            className="rounded-xl rounded-br-none pb-[1px] bg-gradient-to-r from-[#D9D9D9] via-[#1A81C3]/50 to-[#FF00D4]/40"
                        >
                            <div className="relative rounded-xl rounded-br-none p-4 bg-gradient-to-r from-[#1A81C3]/50 to-[#FF98E9]/20 backdrop-blur-md shadow-md ">
                                <p className="text-white mx-[11px]">Suggest some outfit Ideas for my
                                    trip to New York?</p>
                            </div>
                        </div>
                        <Image
                            src={"/2GirlImage.png"}
                            alt=''
                            width={500}
                            height={500}
                            className='w-[90%] mr-4'
                            priority
                        />
                        <div
                            className="rounded-xl rounded-br-none pb-[1px] bg-gradient-to-r from-[#D9D9D9] via-[#1A81C3]/50 to-[#FF00D4]/40 w-fit"
                        >
                            <div className="relative rounded-xl rounded-br-none p-4 bg-gradient-to-r from-[#1A81C3]/50 to-[#FF98E9]/20 backdrop-blur-md shadow-md ">
                                <p className="text-white ">Can you generate 5 more?</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <button
                            className="
                                w-full pl-0 py-3 
                                rounded-xl 
                                bg-white/30 
                                border border-white/40 
                                text-gray-500 
                                backdrop-blur-2xl
                                shadow-md 
                                text-base font-medium
                            ">
                            Message AI Assistant
                        </button>
                        <div className='flex flex-row items-center justify-center bg-radial from-[#A8C5DA] to-[#0064FE] rounded-full h-12 w-15'>
                            <MdOutlineMicNone className='h-5.5 w-5.5 text-white' />
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-between rounded-xl  h-full w-[340px]"
                    style={{
                        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                 rgba(255, 255, 255, 0.6)`,
                        borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 1',
                    }}
                >

                    <div className='flex flex-col gap-2 p-6'>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-3xl max-w-56">
                            Entertainment and Fun
                        </h2>
                        <p className='text-[#757575]/50 font-bold text-md'>
                            Game Ideas, Creative Inspiration, Trivia and Fun Facts
                        </p>
                    </div>
                    {/* <div className='bg-gradient-to-br from-[#EAFFFE] to-[#CDC9F1] flex flex-col justify-between items-center mx-auto rounded-t-xl w-[80%] h-[100%] pt-4 border border-black'> */}
                    <div className="relative p-[2px] bg-gradient-to-br from-white/60 to-white/0 h-[270px] ">
                        <div className="bg-gradient-to-br from-[#EAFFFE] to-[#CDC9F1] px-6 py-3 pb-0 text-center text-gray-700 text-sm font-medium flex flex-col justify-between items-center mx-auto rounded-t-xl w-[80%] h-[100%] pt-4 border border-white border-b-0 drop-shadow-2xl">
                            <Image
                                src={"/ball.png"}
                                alt=''
                                height={50}
                                width={50}
                                priority
                            />
                            <div
                                className="rounded-xl rounded-br-none pb-[1px] bg-gradient-to-r from-[#D9D9D9] via-[#1A81C3]/50 to-[#FF00D4]/40"
                            >
                                <div className="relative rounded-xl rounded-br-none p-4 bg-gradient-to-r from-[#1A81C3]/50 to-[#FF98E9]/20 backdrop-blur-md shadow-md ">
                                    <p className="text-white text-left">Give me a truth-or-dare idea for my party.</p>
                                </div>
                            </div>
                            <div
                                className="rounded-xl rounded-br-none pb-[1px] bg-gradient-to-r from-[#D9D9D9] via-[#1A81C3]/50 to-[#FF00D4]/40"
                            >
                                <div className="relative rounded-xl rounded-tl-none rounded-b-none p-4 pt-2 pb-0 bg-white ">
                                    <p className="text-gray-400 text-left text-sm">
                                        <strong className='text-black'>Truth:</strong><br />
                                        &bull; If you could swap lives with anyone at this party, who would it be and why?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

