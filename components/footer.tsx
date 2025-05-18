import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='mt-10'>
            <div
                className="flex flex-col justify-between rounded-xl  p-6 w-full"
                style={{
                    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
           rgba(255, 255, 255, 0.6)`,
                    borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 2',
                }}
            >

                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col justify-start gap-4 w-[62%]'>

                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#282463] to-[#007DFC] font-bold text-[40px]">
                            {"Your Friendly Digital Companion".toUpperCase()}
                        </h2>
                        <p className='text-[#757575]/50 font-normal text-[20px] w-[88%]'>
                            Your Ultimate Go-To for Advice, Ideas, and Everything In Between
                        </p>

                    </div>
                    <div className='flex flex-col justify-start items-start gap-4'>
                        <p className='text-[#2A2A77] text-md font-medium'>Follow Us On</p>
                        <div className='flex flex-row gap-4'>
                            <div className='rounded-full p-2 border border-[#DFE4EA]'>
                                <FaFacebookF className='h-4 w-4 text-[#007DFC]' />

                            </div>
                            <div className='rounded-full p-2 border border-[#DFE4EA]'>
                                <FaTwitter className='h-4 w-4 text-[#007DFC]' />

                            </div>
                            <div className='rounded-full p-2 border border-[#DFE4EA]'>
                                <FaYoutube className='h-4 w-4 text-[#007DFC]' />

                            </div>
                            <div className='rounded-full p-2 border border-[#DFE4EA]'>
                                <FaLinkedinIn className='h-4 w-4 text-[#007DFC]' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-15'>

                    <div className='flex flex-col gap-6 mt-10'>
                        {footerData("Follow Us On", ["Overview", "Index"])}
                        {footerData("Latest advancements", ["OpenAI o1", "OpenAI o1-mini", "GPT-4", "GPT-4o mini", "DALL·E 3", "Sora"])}
                    </div>
                    <div className='flex flex-col gap-6 mt-10'>
                        {footerData("ChatGPT", ["For Everyone", "For Teams", "For Enterprises", "ChatGPT login"])}
                        {footerData("API", ["Platform overview", "Pricing", "Documentation", "API login"])}
                        {footerData("Explore more", ["OpenAI for business", "Stories"])}
                    </div>
                    <div className='flex flex-col gap-6 mt-10'>
                        {footerData("Safety overview", ["Safety overview"])}
                    </div>

                    <div className='flex flex-col gap-6 mt-10'>
                        {footerData("Company", ["About", "News", "Our Charter", "Security", "Residency", "Careers"])}
                    </div>
                    <div className='flex flex-col gap-6 mt-10'>
                        {footerData("Terms & policies", ["Terms of use", "Privacy policy", "Brand guidelines", "Other policies"])}
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center my-10 mt-15 px-2'>
                    <p className='text-black font-normal text-lg'>@OpenAI © 2015–2024</p>
                    <Image
                        src={"/logo.png"}
                        alt=""
                        width={100}
                        height={80}
                        className="w-32"
                        priority
                    />
                </div>
            </div>
        </div>)
}


const footerData = (title: string, list: string[]) => {
    return <div className='flex flex-col gap-2.5'>
        <p className='text-[#2A2A77] text-md font-medium mb-3'>{title}</p>
        {list.map((e) => (
            <p key={e} className='text-sm text-[#000000]'>{e}</p>
        ))}
    </div>
}
