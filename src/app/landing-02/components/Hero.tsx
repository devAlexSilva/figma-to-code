import imgAppStore from '@/app/landing-02/assets/btn-apple-store.svg'
import woman from '@/app/landing-02/assets/woman.png'
import imgGooglePlay from '@/app/landing-02/assets/btn-google-play.svg'
import ArrowExplorer from '@/app/landing-02/assets/arrow-explorer.svg'
import Image from 'next/image'


const Hero = () => {
  return (
    <section className="bg-landin02Hero w-full h-[704px] bg-cover bg-no-repeat bg-center">
      <div className="container flex items-center justify-between w-full px-3 mx-auto">
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
          <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>
          <div className='flex gap-4 mb-20'>
            <button><Image src={imgAppStore} alt='loja na App Store' /></button>
            <button><Image src={imgGooglePlay} alt='loja na Google Play' /></button>
          </div>
          <button className='flex items-center gap-3'>
            <Image src={ArrowExplorer} alt='continue explorando'/>
            <span className='text-white text-sm font-bold'>Continue explorando</span>
          </button>
        </div>
          <Image className='mt-16 h-[640px]' src={woman} alt='mulher feliz usando o app' />
      </div>
    </section>
  )
}

export default Hero