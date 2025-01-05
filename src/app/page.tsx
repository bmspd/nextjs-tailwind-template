import Image from 'next/image'
import animationSrc from '/public/animation.gif'
import Logo from '/public/icons/logo.svg'
export default function Home() {
  const test = 'a'
  console.log('123')
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Image className="size-[300px]" src={animationSrc} alt="Main animation" unoptimized />
      <h1 className="gradient-text">Template for Next.js</h1>
      <Logo width="300" height="auto" />
    </main>
  )
}
