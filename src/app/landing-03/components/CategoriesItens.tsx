import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type Props = {
  prodImg: StaticImport,
  alt: string,
  description: string
}

const SectionCategoriesItens = ({ prodImg, alt, description }: Props) => {
  return (
    <li className='flex flex-col items-center'>
      <Image src={prodImg} alt={alt} />
      <span className='mt-4 text-sky-900 text-lg font-medium uppercase tracking-tight'>{description}</span>
    </li>
  )
}

export default SectionCategoriesItens