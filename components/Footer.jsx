import Link from "next/link"
import { FaFacebook, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import Newsletter from '../components/_child/newsletter'
export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer className="bg-gray-500">
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <Newsletter/>
                    <div className="flex gap-6 justify-center">
                        <Link href={"/"}><FaFacebook color="#000000" /></Link>
                        <Link href={"/"}><FaTwitter color="#000000" /> </Link>
                        <Link href={"/"}><FaYoutube color="#000000" /> </Link>
                        <Link href={"/"}><FaWhatsapp color="#000000" /> </Link>
                    </div>
                    <p className="py-3 text-gray-400 text-center">{`Copyright ©${year} All rights reserved | This template is made with  by`}</p>
                     <p className="text-gray-400 text-center">Terms and Conditions</p>
                </div>
            </div>
        </footer>
    )
}