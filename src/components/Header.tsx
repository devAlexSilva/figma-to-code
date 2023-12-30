import Image from "next/image"

const Header = () => {
  return (
    <div className="z-10 m-3 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/">
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className=""
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>

  )
}

export default Header