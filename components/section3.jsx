import {Swiper,SwiperSlide} from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/Author';
import fetcher from '../lib/fetcher';
import Spinner from './_child/spinner';
import Error from './_child/error';

export default function section3(){
    const {data, isLoading,isError} = fetcher('api/popular')
     
    if(isLoading){return <Spinner/>}
    if(isError){return <Error/>}    
    return(
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold py-16 text-center text-4xl">Most Popular </h1>
          
          <Swiper 
      
              breakpoints={{
                  640 : {
                      slidesPerView: 2,
                      spaceBetween: 30
                  }
              }}
          >
            
            {
             data.map((value,index)=>(
              <SwiperSlide><Post data={value} key={index}/></SwiperSlide>
             ))
            }
          </Swiper>
        </section>
    )
}


function Post({data}){
  const { id, title, category, img, published, author ,subtitle } = data;
  return(
        <div className="grid"> 
         <div className="images">
            <Link href={`/posts/${id}`}>
              <Image src={img || "/"} alt="" height={400} width={600} />
            </Link>
         </div>
         <div className="info flex justify-center flex-col"></div>
         
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">
           {category || "Unknown"}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">
         
            {published ||"unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
           {title || "Unknown"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {subtitle || "Unknown"}
        </p>
        { author ? <Author {...author}></Author> : <></>}
      </div>

        </div>
    )
}