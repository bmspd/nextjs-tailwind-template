import Image from 'next/image'
import animationSrc from '/public/animation.gif'
import Logo from '/public/icons/logo.svg'
import { getT } from '../i18n'
import { LanguageSwitcher } from '@/components/language-switcher'
export default async function Home() {
  const { t } = await getT('translation')
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <LanguageSwitcher />
      <Image className="size-[300px]" src={animationSrc} alt="Main animation" unoptimized />
      <h1 className="gradient-text font-nunito">{t('message')}</h1>
      <Logo width="300" height="auto" />
    </main>
  )
}
