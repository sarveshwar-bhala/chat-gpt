import React from 'react'

export default function RoadMap() {
    return (
        <div className='flex flex-col mt-48'>
            <div className='flex flex-row justify-start'>
                <div className='flex flex-col justify-start gap-4 w-[62%]'>

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-[46px]">
                        {"Your Ultimate Go-To for Advice, Ideas, and Everything In Between".toUpperCase()}
                    </h2>
                    <p className='text-[#757575]/50 font-normal text-[22px] w-[88%]'>
                        Whether you need help with school, want creative ideas, or just need someone to chat with, ChatGPT is here for you. Explore the Possibilities
                    </p>
                    {/* <div className='flex flex-row items-start justify-start gap-4 w-[60%] h-[250px] border-r border-dashed border-r-spacing-10 border-blue-600 pt-4'> */}
                    <div className="flex flex-row justify-between items-start gap-4 w-[67%] h-[280px] pt-4">
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
                        <div
                            className="h-full w-[2px]"
                            style={{
                                backgroundImage: "linear-gradient(to bottom, #0064FE, #FFFFFF)",
                                maskImage:
                                    "repeating-linear-gradient(to bottom, black 0 10px, transparent 10px 20px)",
                                WebkitMaskImage:
                                    "repeating-linear-gradient(to bottom, black 0 10px, transparent 10px 20px)",
                            }}
                        ></div>


                    </div>

                </div>
            </div>
            <div className='flex flex-row justify-end'>
                <div className='flex flex-col justify-start gap-4 w-[60%]'>

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-[46px]">
                        {"What Can ChatGPT Do For You?".toUpperCase()}
                    </h2>
                    <ul className="list-disc list-inside text-gray-400 text-lg space-y-2  px-2">
                        <li>
                            Ace Your Homework: Understand tough subjects and get help with projects.
                        </li>
                        <li>
                            Unlock Creativity: Get ideas for essays, songs, or art projects.
                        </li>
                        <li>
                            Plan Like a Pro: Create schedules, plan events, or organize your week.
                        </li>
                        <li>
                            Fun & Random: Share memes, crack jokes, or learn fun facts.
                        </li>
                    </ul>

                    {/* <div className='flex flex-row items-start justify-start gap-4 w-[60%] h-[250px] border-r border-dashed border-r-spacing-10 border-blue-600 pt-4'> */}
                    <div className="flex flex-row justify-between items-start gap-4 w-[72%] h-[280px] pt-4 pl-3.5">

                        <div
                            className="h-full w-[2px]"
                            style={{
                                backgroundImage: "linear-gradient(to bottom, #0064FE, #FFFFFF)",
                                maskImage:
                                    "repeating-linear-gradient(to bottom, black 0 10px, transparent 10px 20px)",
                                WebkitMaskImage:
                                    "repeating-linear-gradient(to bottom, black 0 10px, transparent 10px 20px)",
                            }}
                        ></div>


                    </div>

                </div>
            </div>
            <div className='flex flex-row justify-start'>
                <div className='flex flex-col justify-start gap-4 w-[56.5%]'>

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-[46px]">
                        {"Why Teens Love It".toUpperCase()}
                    </h2>
                    <ul className="list-disc list-inside text-gray-400 text-lg space-y-2 px-2">
                        <li>
                            Instant Answers: No need to wait — your questions answered in seconds.
                        </li>
                        <li>
                            Judgment-Free Zone: Feel free to ask anything.
                        </li>
                        <li>
                            Made for You: Simple, friendly, and always relatable.
                        </li>
                    </ul>

                    {/* <div className='flex flex-row items-start justify-start gap-4 w-[60%] h-[250px] border-r border-dashed border-r-spacing-10 border-blue-600 pt-4'> */}
                    <div className="flex flex-row justify-end items-start gap-4 w-[72%] h-[280px] pt-4 pl-3.5">

                        <div
                            className="h-full w-[2px]"
                            style={{
                                backgroundImage: "linear-gradient(to bottom, #0064FE, #FFFFFF)",
                                maskImage:
                                    "repeating-linear-gradient(to bottom, black 0 10px, transparent 10px 20px)",
                                WebkitMaskImage:
                                    "repeating-linear-gradient(to bottom, black 0 10px, transparent 10px 20px)",
                            }}
                        ></div>


                    </div>

                </div>
            </div>
            <div className='flex flex-row justify-end'>
                <div className='flex flex-col justify-start gap-4 w-[60%]'>

                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-[46px]">
                        {"How It Works".toUpperCase()}
                    </h2>
                    <ul className="list-disc list-inside text-gray-400 text-lg space-y-2 px-2">
                        <li>
                            Sign Up: Create an account in just a few clicks.
                        </li>
                        <li>
                            Start a Chat: Ask your first question or just say hi.
                        </li>
                        <li>
                            Explore & Learn: Let ChatGPT help you with whatever you need!
                        </li>
                    </ul>

                    {/* <div className='flex flex-row items-start justify-start gap-4 w-[60%] h-[250px] border-r border-dashed border-r-spacing-10 border-blue-600 pt-4'> */}
                   
                </div>
            </div>
        </div>
    )
}
