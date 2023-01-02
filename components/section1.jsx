import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import fetcher from "../lib/fetcher";


export default function Section() {
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  const { data ,isLoading,isError } = fetcher('/api/trending');
  if(isLoading){return(
    <Spinner/>
  )}  
  
  if(isError){
    return(
      <Error/>
    )
  }
  SwiperCore.use(Autoplay);
  return (
    <section className="py-16 bg-white">
      <div className="container mix-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center text-black">
          TRENDING
        </h1>
      </div>
      <Swiper
        loop={true}
        autoplay={{
            delay:2000
        }}
      
      >
        {
          data.map((value,index)=>(
            <SwiperSlide><Slide data={value} key={index}/></SwiperSlide>
          ))
        }
      </Swiper>
     
    </section>
  );
}

function Slide({data}) {
  const { id, title, category, img, published, author ,subtitle } = data;
  return (
    <div className="grid md:grid-cols-2 sm:px-5">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} height={600} width={600} alt="" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">
            {" "}
           {category || "Unknown"}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">
            {" "}
            {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
           {title || "Unknown"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {subtitle || "Unknown"}{" "}
        </p>
        { author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
