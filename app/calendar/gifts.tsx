'use client'

import Image from "next/image"
import { IGift } from "@/gifts"
import { useEffect, useState } from "react"
import hasDatePassed from "@/scripts/has-date-passed"
import { redirect } from "next/navigation"
import { motion, Variants } from "framer-motion"

const appearing: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    }
}

const Gift = ({ id, dateOfOpening, giftLockedImage, giftOpenedImage }: IGift) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [isTimeShowed, setIsTimeShowed] = useState<boolean>(false)

    useEffect(() => {
        const isPassed = hasDatePassed(dateOfOpening)
        setIsOpened(isPassed)
    }, [dateOfOpening])

    const onOpen = () => {

        if (isOpened) {
            redirect(`/calendar/${id}`)
        }

        if (!isOpened) {
            setIsTimeShowed(true)
            setTimeout(() => {
                setIsTimeShowed(false)
            }, 1000)
        }
    }

    return (
        <div key={id} onClick={onOpen} className="relative">
            {
                isTimeShowed && (
                    <motion.div
                        className="text-[2rem] left-0 right-0 mx-auto w-fit py-2 bg-[#eddba2] top-32 absolute text-[#BF2B32] rounded-2xl px-8 shadow-lg"
                        initial='hidden'
                        animate='visible'
                        variants={appearing}>
                        <span className="font-bold">{dateOfOpening}</span>
                    </motion.div>
                )
            }
            <Image
                src={isOpened ? giftOpenedImage : giftLockedImage}
                width={350}
                height={200}
                alt='I love you girl <3' />
        </div>
    )
}

export default Gift