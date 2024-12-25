'use client'

import Image from "next/image";
import Link from "next/link";

import Snow from "@/components/snow";

const App = () => {

  return (
    <>
      <Snow />
     
      <div
        className="bg-[#f12929] h-screen flex flex-col items-center justify-between py-12"
      >
        <div className="text-center">
          <h1 className="p-[1rem]">Happy new year Diana</h1>
          <p className="text-white text-[2rem] font-light">This advent calendar is special for you!</p>
        </div>

        <main className="flex flex-col items-center mb-[7rem] gap-4 z-10">
          <Image src='/we-decorate-christmas-tree.png' width={600} height={200} alt='We decorate the christmas tree' />

          <Link href='/calendar/direction/right' className="bg-[#dcdfae] text-[2.4rem] px-20 py-4 rounded-3xl flex items-center gap-8 shadow-lg">
            <span className="text-[#8b561a] christmasFont text-[3.4rem]">Go to advent</span>
            <Image src='/woody-arrow.png' width={70} height={30} alt='-->' style={{ width: '5rem', height: '2.5rem' }} />
          </Link>

        </main>

      </div>
    </>
  )
}

export default App