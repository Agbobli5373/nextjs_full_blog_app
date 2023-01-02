import Image from "next/image"
import Link from "next/link"
import Author from "./_child/Author"
import Spinner from "./_child/spinner"
import Error from "./_child/error"
import getPost from "../lib/helper"
import fetcher from "../lib/fetcher"


export default function section2(){
    //getPost(1).then(res=>console.log(res));
     const { data, isLoading, isError } = fetcher('api/posts')
     //if(data){console.log(data)}
    
     if(isLoading){return(
      <Spinner/>
    )}  
    
    if(isError){
      return(
        <Error/>
      )
    }
  
    return(
        <section className="container mx-auto md:px-20 py-10 bg-white">
            <h1 className="font-bold text-4xl py-12 text-center">Lastest Posts</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
               data?  data.map((value, index) => (
                <Post data={value} key={index}/>
            )) : console.log(" Data not found")

            }
             
            </div>
        </section>
    
    )
}


function Post({data}){
  const { id, title, category, img, published, author ,subtitle } = data;
    return(
        <div className="item"> 
         <div className="images">
            <Link href={`/posts/${id}`}>
              <Image src={img} alt="" height={350} width={500} className="rounded"/>
            </Link>
         </div>
         <div className="info flex justify-center flex-col"></div>
         
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">
            {category||"Unknown"}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">
             {published ||"Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
           {title ||"Unknown"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
        {subtitle}
        </p>
        { author ? <Author {...author}></Author> : <></>}
      </div>

        </div>
    )
}