"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Header() {
    const router = useRouter()
    return (
        <div className='flex flex-row justify-between items-center w-full bg-transparent'>
            <Image
                src={"/logo.png"}
                alt=""
                width={100}
                height={100}
                className="w-40"
            />
            <button
                onClick={()=>router.push("/login")}
                className="px-8 py-3 border border-white rounded-md text-[#233178] bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] bg-opacity-50"
            >
                Get Started
            </button>
        </div>
    )
}
