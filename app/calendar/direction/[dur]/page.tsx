
'use client'

import { use, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { motion, Variants } from "framer-motion"

import timeUntilNextDay from "@/scripts/get-time-by-next-opening"
import hasDatePassed from "@/scripts/has-date-passed"

import gifts from "@/gifts"
import Gift from "../../gift"
import ModalWish from "@/components/modal-wish"
import { getHasSeen, setHasSeen } from "@/scripts/has-seen"

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
    const [isModal, setIsModal] = useState(false)

    const { dur } = use(params)

    useEffect(() => {
        setNextOpen(timeUntilNextDay())
        setIsNewYear(hasDatePassed('01.01.2025'))
        const hasSeen = getHasSeen()

        if (!hasSeen) {
            setIsModal(hasDatePassed('26.12.2024'))
        }
    }, [])

    useEffect(() => {
        // Отключаем прокрутку
        if (isModal) { document.body.style.overflow = 'hidden' }
        return () => {
            // Восстанавливаем прокрутку
            document.body.style.overflow = ''
        }
    }, [isModal])

    if (!nextOpen) return null

    const closeModal = () => {
        setHasSeen(true)
        setIsModal(false)

    }

    return (
        <div className="bg-[#f4e7ba] min-h-screen h-full">

            {isModal && <ModalWish />}
            {isModal && <div className="h-screen w-screen bg-[#0000008a] z-40 absolute top-0"></div>}
            {isModal && (
                <div className="absolute z-50 top-[50rem] left-0 right-0 m-auto py-4 bg-[#d72f37] rounded-[16px] w-[44rem] text-center border-b-8 border-[#99252a] active:border-b-0" onClick={closeModal}>
                    <span className="text-[2rem] font-thin">и я тебя очень люблю 💗</span>
                </div>
            )}

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

        </div >
    )
}

export default Calendar
