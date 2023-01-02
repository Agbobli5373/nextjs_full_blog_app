import { global } from "styled-jsx/css"
import { FaFacebook,FaWhatsapp,FaYoutube,FaTwitter } from 'react-icons/fa';
import Link from "next/link";

export default function Header(){
    return(
       <header className="bg-gray-500">
        <div className="xl:container xl:mx-auto flex flex-col  items-center sm:flex-row sm:justify-between text-center py-3">
         <div className="md:flex-none w-96 order-2 sm:order-1  flex justify-center py-4 sm:py-0">
            <input type="text" placeholder="search"  className="input-text" />
         </div>
         <div>
            
         </div>
         <div className="shrink w-80 sm:order-2">
            <Link href={"/"} className="font-bold uppercase  text-3xl text-black"> Ayuba Blog App</Link>
         </div>
         <div className="w-96 order-3 flex justify-center">
           <div className="flex gap-6">
           <Link href={"/"}><FaFacebook color="#000000"/></Link>
           <Link href={"/"}><FaTwitter color="#000000"/> </Link>
           <Link href={"/"}><FaYoutube color="#000000"/> </Link>
           <Link href={"/"}><FaWhatsapp color="#000000"/> </Link>
           </div>
         </div>
        </div>
       </header>
    )
}