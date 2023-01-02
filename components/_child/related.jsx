import Image from "next/image" ;
import Link from "next/link";
import Author from "./Author";
import Error from "./error";
import Spinner from "./spinner";
import fetcher from "../../lib/fetcher";

export default function related() {
  const{data,isLoading,isError} = fetcher('/api/posts') ;
  if(isLoading){return <Spinner/>}
  if(isError){return <Error/>}
  return (
    <section className="pt-20">
        <h1  className="text-bold text-3xl py-10"> Related News</h1>
      <div className="flex flex-col gap-4">
        {
          data.map((value,index)=>(
            data?<Post data={value} key={index}/>:<></>
          
          ))
        }
      </div>
    </section>
  )
}

function Post({data}){
  const { id, title, category, img, published, author  } = data;
  return(
    <div className="flex gap-5">
      <div className="image flex flex-col justify-center">
                <Link href={`/posts/${id}`} >
                    <Image src={img} alt='' width={300} height={200} className="rounded"/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
            <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">
      
            {category}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">
          {" "}
            {published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title}
          </Link>
        </div>
         
        {author?<Author {...author}/>:<></>}
        
            </div>
            
    </div>
  )
}