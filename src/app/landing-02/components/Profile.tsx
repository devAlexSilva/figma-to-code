import Icon from '@/app/landing-02/assets/icon-user.svg'
import Image from 'next/image'
export default function Profile() {
  return (
    <button className='flex justify-center items-center m-auto w-full h-full gap-2'>
      <Image src={Icon} alt='profile icon' />
      <span>Acessar conta</span>
    </button>
  )
}
