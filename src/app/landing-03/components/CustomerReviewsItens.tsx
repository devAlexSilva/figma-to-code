import Image from "next/image"
import quotesImage from '@/app/landing-03/assets/quotes.svg'

type Props = {
  comment: string,
  author: string
}

const CustomerReviewsItens = ({ comment, author }: Props) => {
  return (
    <li className='flex flex-col items-center border border-zinc-300'>
      <div className='relative p-5'>
        <Image src={quotesImage} alt="quotes" />
        <div className='mt-6 text-center text-lg font-normal font-["Open Sans"] tracking-tight'>
          <h2 className='text-neutral-700 line-clamp-3'>{comment}</h2>
          <p className='mt-8 text-black'>{author}</p>
        </div>
      </div>
    </li>
  )
}

export default CustomerReviewsItens