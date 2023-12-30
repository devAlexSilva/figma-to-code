import Image from "next/image"
import Icon from "@/app/landing-02/assets/icon-search.svg"

export const Search = () => {
  return (
    <div className="flex gap-3">
      <Image className="" src={Icon} alt="icon search"/>
      <input className="bg-inherit placeholder:text-white outline-none p-1" placeholder="Buscar"/>
    </div>
  )
}
