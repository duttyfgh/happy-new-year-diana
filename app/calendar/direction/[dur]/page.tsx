'use client'

import { use, useEffect, useState } from "react"
import Image from "next/image"

import { motion, Variants } from "framer-motion"

import timeUntilNextDay from "@/scripts/get-time-by-next-opening"
import hasDatePassed from "@/scripts/has-date-passed"
import gifts from "@/gifts"
import Gift from "../../gifts"
import Link from "next/link"

type CalendarProps = {
    params: Promise<{ dur: string }>
}


const rightAnimation: Variants = {
    hidden: {
        x: -200,
    },
    visible: {
        x: 0,
    }
}

const leftAnimation: Variants = {
    hidden: {
        x: 200,
    },
    visible: {
        x: 0,
    }
}

const Calendar = ({ params }: CalendarProps) => {
    const [nextOpen, setNextOpen] = useState<string>('00:00')
    const [isNewYear, setIsNewYear] = useState<boolean>(false)

    const { dur } = use(params)

    useEffect(() => {
        setNextOpen(timeUntilNextDay())
        setIsNewYear(hasDatePassed('01.01.2025'))
    }, [])

    if (!nextOpen) return null

    return (
        <div className="bg-[#f4e7ba] min-h-screen h-full">
            <motion.header
                className="h-[22rem] bg-[#eddba2] flex flex-col px-12 pt-12 rounded-b-3xl"
                initial='hidden'
                animate='visible'
                variants={dur === 'left' && leftAnimation || rightAnimation}
            >

                <Link href='/' className="flex items-center gap-6">
                    <h1 className="text-[#d72f37]">Calendar</h1>
                    <Image src='/calendar-icon.png' width={50} height={50} alt='...' />
                </Link>

                <p className="text-[#d72f37] text-[1.8rem] -mt-2">Come every day and open the boxes with wishes!</p>
                <p className="text-[#d72f37] text-[1.8rem] -mt-2">and remember that I love you ♥</p>

                {!isNewYear ? <div className="text-[#d72f37] text-[1.8rem] py-6">
                    <span className="font-bold">Next opening after: </span>
                    <span>{nextOpen} hours</span>
                </div>
                    : <span className="text-[#d72f37] text-[1.8rem] py-6 font-bold">Come in next year sweety!</span>
                }
            </motion.header>

            <motion.div
                className="flex flex-col gap-6 items-center py-12"
                initial='hidden'
                animate='visible'
                variants={dur === 'left' && leftAnimation || rightAnimation}
            >
                {
                    gifts.map((gift) => (
                        <Gift
                            key={gift.id}
                            id={gift.id}
                            img={gift.img}
                            dateOfOpening={gift.dateOfOpening}
                            giftLockedImage={gift.giftLockedImage}
                            giftOpenedImage={gift.giftOpenedImage}
                            whish={gift.whish}
                        />
                    ))
                }
            </motion.div>

        </div>
    )
}

export default Calendar