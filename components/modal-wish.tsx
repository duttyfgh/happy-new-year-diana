import Image from "next/image"
import Snow from "./snow"

const ModalWish = () => {
    return (

        <div className="bg-[#d72f37] w-[44rem] text-[2rem] absolute top-[3rem] left-0 right-0 m-auto rounded-[30px] overflow-hidden z-50 flex flex-col justify-between items-center gap-4 pt-[4rem] select-none">



            <div className="relative">

                <Image src='/message-block.png' width={310} height={300} alt='kitti' />
                <span className="text-[1.6rem] font-tdhin text-[#d72f37] absolute top-10 left-0 right-0 m-auto text-center">удачной ночевки, я очень тебя люблю💕💗</span>
            </div>

            <div className="flex flex-col items-center relative">
                <Image src='/extra-wish-kitti.png' width={180} height={200} alt='kitti' className='-mb-[5rem] z-10' />
                <img src='/extra-wish-bottom-snow.png' alt='snow' />
            </div>
        </div>
    )

}

export default ModalWish