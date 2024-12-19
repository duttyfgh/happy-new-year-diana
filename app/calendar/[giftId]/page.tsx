'use client'

import { use, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { motion, Variants } from "framer-motion"

import { getGiftById, IGift } from "@/gifts"

import Snow from "@/components/snow"
import hasDatePassed from "@/scripts/has-date-passed"
import { redirect } from "next/navigation"

type GiftPageTypes = {
    params: Promise<{ giftId: string }>
}

const rightAnimation: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}

const appearingOfWords: Variants = {
    hidden: {
        y: 0,
        opacity: 0

    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom / 4 }
    })
}


const GiftPage = ({ params }: GiftPageTypes) => {
    const [gift, setGift] = useState<IGift>()
    const [today, setToday] = useState<number>(20)
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [isNewYearPassed, setIsNewYearPassed] = useState<boolean>(false)
    
    const { giftId } = use(params)
    const isGolden = giftId === '13'

    useEffect(() => {
        const gift = getGiftById(+giftId)
        setGift(gift)

        //get and set current date
        const today = new Date()
        setToday(today.getDate())

        const isNewYearPassed = hasDatePassed('01.01.2025')
        setIsNewYearPassed(isNewYearPassed)

    }, [giftId])

    useEffect(() => {
        const isPassed = hasDatePassed(gift?.dateOfOpening || '15.12.2024')
        setIsOpened(isPassed)
    }, [gift?.dateOfOpening])

    const wish = gift?.whish.split(' ')
    const goldenWish = 'Ты мой самый главный новогодний подарок <3'.split(' ')

    if (gift && !isOpened) {
        redirect('/calendar/direction/left')
    }

    return (
        <>
            <Snow />
            <main className="bg-[#D72F37] min-dh-screen h-full overflow-hidden">
                <img src='/top-snow.png' className="w-screen absolute -top-12 left-0" alt='snow' />

                <header className="h-[22rem] bg-[#BF2B32] flex flex-col px-12 pt-12 rounded-b-3xl shadow-md overflow-hidden">
                    <motion.h1
                        className="mt-[6.2rem]"
                        initial='hidden'
                        animate='visible'
                        variants={rightAnimation}
                    >
                        {
                            isNewYearPassed || isGolden
                                ? 'Happy new year!'
                                : `${today}th December`
                        }
                    </motion.h1>
                </header>

                <motion.div
                    className="px-12"
                    initial='hidden'
                    animate='visible'
                    variants={rightAnimation}
                    transition={{ duration: 0.3 }}
                >
                    <Link href='/calendar/direction/left'>
                        <h1>{`<-`}</h1>
                    </Link>

                    <div className="flex flex-col items-center gap-12 pb-16 pt-8">
                        {
                            isGolden ?
                                <div
                                    className="text-[2rem] font-thin flex gap-2 flex-wrap">
                                    {goldenWish?.map((word, index) => (
                                        <motion.span key={index} custom={index} variants={appearingOfWords}>
                                            {word}
                                        </motion.span>
                                    ))}
                                </div>

                                : <h1 className="text-[12rem] font-normal leading-[1px] mb-20">{giftId}</h1>
                        }


                        <Image src={gift?.img || `/day${giftId}.png`} width={isGolden ? 550 : 250} height={200} alt={gift?.whish || 'I love you :3'} className="z-10" />

                        <div
                            className="text-[2rem] font-thin flex gap-2 flex-wrap">
                            {wish?.map((word, index) => (
                                <motion.span key={index} custom={index} variants={appearingOfWords}>
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <img src='/bottom-snow.png' alt='snow' />
            </main>
        </>
    )
}

export default GiftPage