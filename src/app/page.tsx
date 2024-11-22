"use client";

import Image from 'next/image'
import me from '../../public/next.svg'
export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Main page
      <div className='w-[500px]'>
        <Image quality={100} src={me} alt='me in my office' />

      </div>
    </div>
  );
}
