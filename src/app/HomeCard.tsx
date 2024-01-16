
export type PHomeCard = {
  item: {
    name: string;
    title: string;
    description: string;
    imageUrl: string
  },
  selectLandingPage: (index: number) => {},
  index: number
}

const HomeCard = ({ item, index, selectLandingPage }: PHomeCard) => {
  const handleClick = (index = 0) => {
    selectLandingPage(index)
  }
  return (
    <li className='h-40 relative hover:cursor-pointer' onClick={() => handleClick(index)}>
      <img className="w-52 h-40" src={item.imageUrl} alt="" />
      <h2 className="absolute text-center bottom-1 inset-x-0 text-[26px] font-semibold font-['Lato'] tracking-tight">{item.name}</h2>
    </li>
  )
}

export default HomeCard