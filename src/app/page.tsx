import Image from 'next/image'
import animationSrc from '@public/animation.gif'
import Logo from '@public/icons/logo.svg'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      env:{process.env.NODE_ENV}
      <span className="font-nunito">Nunito</span>
      <span className="font-inter">Inter</span>
      <Image src={animationSrc} alt="Main animation" unoptimized />
      <Logo width={300} height={'auto'} />
    </main>
  )
}
