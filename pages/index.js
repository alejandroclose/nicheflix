import Head from "next/head";
import { getCategoryData } from "../lib/categories";

import Navbar from "../components/navbar";
import LinkCards from "../components/linkCards";

export default function Home(props) {
  return (
    <div className="bg-black h-screen">
      <Head>
        <title>Nicheflix | Find your next binge</title>
        <meta
          name="description"
          content="Discover TV series, movies, musicals and documentaries on hidden Netflix&apos;s curated categories"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="md:px-20 bg-black flex flex-col justify-center items-center">
        <div className="text-gray-400 w-9/12 text-center m-2">
          Discover Netflix&apos;s hidden curated
          categories
        </div>
        <LinkCards data={props.data} />
      </div>

      <footer className="bg-black h-16 flex items-center justify-center">
        <a
          href="https://github.com/alejandroclose/nicheflix"
          target="_blank"
          rel="noreferrer noopener"
          className="text-xs text-gray-400"
        >
          Made in Barcelona with ❤️
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch necessary data
  const data = await getCategoryData();

  return {
    props: {
      data: data,
    },
  };
}
