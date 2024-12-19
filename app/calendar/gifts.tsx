'use client'

import Image from "next/image"
import { IGift } from "@/gifts"
import { useEffect, useState } from "react"
import hasDatePassed from "@/scripts/has-date-passed"
import { redirect } from "next/navigation"

const Gift = ({ id, dateOfOpening, giftLockedImage, giftOpenedImage }: IGift) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)

    useEffect(() => {
        const isPassed = hasDatePassed(dateOfOpening)
        setIsOpened(isPassed)
    }, [dateOfOpening])

    const onOpen = () => {

        if(isOpened) {
            redirect(`/calendar/${id}`)
        }
    }
    
    return (
        <div key={id} onClick={onOpen}>
            <Image
                src={isOpened ? giftOpenedImage : giftLockedImage}
                width={350}
                height={200}
                alt='I love you girl <3' />
        </div>
    )
}

export default Gift