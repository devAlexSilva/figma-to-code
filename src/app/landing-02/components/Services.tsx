import phoneIcon from '@/app/landing-02/assets/icon-phone.svg'
import cardIcon from '@/app/landing-02/assets/icon-card.svg'
import solutionsIcon from '@/app/landing-02/assets/icon-solutions.svg'
import optionsIcon from '@/app/landing-02/assets/icon-options.svg'
import phone from '@/app/landing-02/assets/phone.png'
import ServiceItens from "./ServiceItens"
import Image from 'next/image'

const Services = () => {
  return (
    <main className="w-full h-[704px] container mx-auto flex items-center justify-between px-3">
      <article className="flex-1 max-w-[594px] pt-32">
        <span className="block text-primary-orange font-bold text-sm uppercase mb-9">
          serviços exclusivos
        </span>
        <h2 className="text-primary-gray text-[56px] font-bold leading-tight">
          Gerencie suas finanças sem sair de casa
        </h2>
        <p className="text-lg max-w-[554px] mb-16 text-second-gray">
          Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.
        </p>
        <ul>
          <ServiceItens img={phoneIcon} alt='icone do telefone' description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver" />
          <ServiceItens img={cardIcon} alt='icone do card' description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver" />
          <ServiceItens img={optionsIcon} alt='icone do serviço de opçoes' description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver" />
          <ServiceItens img={solutionsIcon} alt='icone do serviço de soluções' description="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver" />
        </ul>
      </article>
      <aside className='w-[43%]'>
        <Image className='h-[704px] pt-32' src={phone} alt='celular'/>
      </aside>
    </main>
  )
}

export default Services