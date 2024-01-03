import earring from '@/app/landing-03/assets/earring.png'
import rings from '@/app/landing-03/assets/rings.png'
import bracelets from '@/app/landing-03/assets/bracelets.png'
import engagementRings from '@/app/landing-03/assets/engagement ring.png'
import necklaces from '@/app/landing-03/assets/necklaces.png'
import Section01Itens from './SectionCategoriesItens'

const Section01 = () => {
  return (
    <div className="h-96 max-w-[1230px] mx-auto my-12">
      <h1 className="w-[584px] h-10 mb-12 text-sky-900 text-4xl font-black uppercase tracking-tight">Shop by Jewelry Type</h1>
      <ul className='flex gap-8'>
        <Section01Itens prodImg={earring} alt='brincos prateados' description='earring' />
        <Section01Itens prodImg={rings} alt='aneis prateados' description='rings' />
        <Section01Itens prodImg={bracelets} alt='braceletes' description='bracelets' />
        <Section01Itens prodImg={engagementRings} alt='aneis para casamento' description='engagement rings' />
        <Section01Itens prodImg={necklaces} alt='colares' description='necklaces' />
      </ul>
    </div>
  )
}

export default Section01