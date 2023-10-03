import logo from 'public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { BiGame } from 'react-icons/bi'

export function Header() {
    return(

        <header className="relative w-full h-28 bg-gray-50 text-black px-2">
            <div className="absolute inset-0">
                <Image
                    src="/yellow-background.jpg"
                    alt="background image"
                    fill
                />
            </div>
         <div className="relative sm:justify-between max-w-screen-xl mx-auto flex justify-center items-center h-28">
         <nav className="flex justify-center items-center gap-4">
            <Link href="/">
                <Image 
                src={logo} 
                alt={'logo'} 
                quality={100} 
                priority={true} 
                width={230} 
                height={230} />
             </Link>

             <Link href={"/"}>
                Games
             </Link>
             <Link href={'/profile'}>
                Profile
             </Link>
             

         </nav>
         <div className="hidden sm:flex justify-center items-center mr-5">
            <Link href={'/profile'}>
                <BiGame size={30} color="#502380"/>
            </Link>
         </div>
         </div>
        </header>
    )
}