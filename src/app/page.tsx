import Image from 'next/image'
import animationSrc from '@public/animation.gif'
import Logo from '@public/icons/logo.svg'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {process.env.NODE_ENV}
      <Image src={animationSrc} alt="Main animation" unoptimized />
      <Logo width={300} height={'auto'} />
    </main>
  )
}
