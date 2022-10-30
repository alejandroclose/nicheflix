import { useRouter } from 'next/router';
import { getCategoryData } from "../lib/categories";
import Navbar from '../components/navbar'

export default function Category(props) {

  const router = useRouter();

  if (props.hasError) {
    return <h1>404</h1>
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <Navbar />
      <h1>{props.specificCategoryData.genre}</h1>
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for slug
  const data  = await getCategoryData();
  const pathsWithParams = data.categories.map((category)=> ({params: {slug:category.slug}}))

  return {
    paths: pathsWithParams,
    fallback:  true
  }
}

export async function getStaticProps(context) {
  // Fetch necessary data
  const itemSlug = context.params?.slug
  const data = await getCategoryData()
  const foundCat = data.categories.find((item) => itemSlug === item.slug)

  if(!foundCat){
    return {
      props: {haasError: true}
    }
  }
 
  return{
    props: {
      specificCategoryData: foundCat
    }
  }
}
