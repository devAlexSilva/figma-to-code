import Image from "next/image"

type Props = {
  img: HTMLImageElement,
  description: string,
  alt: string
}
const ServiceItens = ({ img, description, alt }: Props) => {
  return (
    <li className='flex items-center justify-center gap-9 pb-9 mb-4 last-of-type:border-b-0 border-b-[1px] border-r-opacity-gray'>
      <Image className='w-7 h-7' src={img} alt={alt} />
      <p className="flex-1 text-text-gray pr-2">{description}</p>
    </li>
  )
}

export default ServiceItens