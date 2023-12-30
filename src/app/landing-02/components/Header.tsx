//rafce
import logo from '@/app/landing-02/assets/logo.svg'
import Image from "next/image"
import MenuItens from './MenuItens'
import { Search } from './Search'
import Profile from './Profile'

const Header = () => {
  return (
    <header className="bg-primary-orange text-gray-phone flex justify-between w-full h-20">
      <div className="container flex mx-auto">
        <div className="flex justify-between items-center w-[80%]">
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={48}
          />
          <MenuItens />
          <Search />
        </div>
        <div className="fixed right-0 w-[20%] h-20 bg-primary-blue">
          <Profile />
        </div>
      </div>
    </header>
  )
}

export default Header