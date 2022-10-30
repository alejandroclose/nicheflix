import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getCategoryData } from "../lib/categories";

import Navbar from "../components/navbar"
import LinkCards from "../components/linkCards"

export default function Home(props) {
  console.log('props',props)
  return (
    <div className="bg-black  h-screen">
      <Head>
        <title>Nicheflix | Find your next binge</title>
        <meta name="description" content="Find your next binge on Netflix's hidden curated categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="px-20 bg-black flex flex-col justify-center items-center">
      <div className="text-gray-400 w-9/12 text-center m-2">Click on your favorite category to find Netflix's hidden curated categories</div>
      <LinkCards data={props.data}/>

      </div>
     
      <footer className="bg-black h-16 flex items-center justify-center">
        <a
          href="https://github.com/alejandroclose/nicheflix"
          target="_blank"
          rel="" className="text-xs text-gray-400"
        >
          Made in Barcelona with ❤️
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // Fetch necessary data
  const data = await getCategoryData()

  return{
    props: {
      data: data
    }
  }
}