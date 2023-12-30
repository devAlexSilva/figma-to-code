import Image from "next/image"
import ArrowDown from '@/app/landing-02/assets/arrow-down.svg'

const headerItens = [
  { name: 'Para você', img: ArrowDown, alt: 'arrow down' },
  { name: 'Para você', img: ArrowDown, alt: 's' },
  { name: 'Para você', img: ArrowDown, alt: 's' },
  { name: 'Para você', img: ArrowDown, alt: 's' }
]

const MenuItens = () => {
  return (
    <ul className="flex gap-6">
      {
        headerItens.map((item, index) =>
          <li key={index} className="p-3">
            <button className="flex font-bold items-center gap-3">
              <span>{item.name}</span>
              <Image
                src={item.img}
                alt={item.alt}
              />
            </button>
          </li>
        )
      }
    </ul>
  )
}

export default MenuItens