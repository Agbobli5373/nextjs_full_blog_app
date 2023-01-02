import Author from '../../components/_child/Author' ;
import Image from 'next/image';
import Related from '../../components/_child/related'
import getPosts from '../../lib/helper';
import fetcher from '../../lib/fetcher';
import Spinner from '../../components/_child/spinner';
import Error from '../../components/_child/error';
import { useRouter } from 'next/router' ;
import { SWRConfig } from 'swr' ;

export default function Page({ fallback }){

  const router = useRouter()
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`)

  if(isLoading) return <Spinner/>
  if(isError) return <Error/>

  return (
      <SWRConfig value={ { fallback }}>
          <Article {...data}></Article>
      </SWRConfig>
  )

}

function Article({ title, img, subtitle, description, author }) {
  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
     <div className="flex justify-center">
     { author ? <Author {...author}></Author> : <></>}
     </div>
     <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-5">
           {title}
            </h1>
            <p className="text-center text-gray-500
            text-xl">
            {subtitle}
            </p>
            <div className="py-10">
                <Image src={img} alt="" width={"900"} height={600}/>
            </div>
            <div className="content py-10 text-gray-600 flex flex-col text-xl">
           <p>{description}</p>
                   </div>
        </div>
        <Related/>
    </section>
  )
}
 

export async function getStaticProps( { params } ){
  const posts = await getPosts(params.postId)

  return {
     props : {
          fallback : {
              '/api/posts' : posts
          }
     }
  }
}

export async function getStaticPaths(){
  const posts = await getPosts();
  const paths = posts.map(value => {
      return {
          params : {
              postId : value.id.toString()
          }
      }
  })

  return {
      paths,
      fallback : false
  }

}