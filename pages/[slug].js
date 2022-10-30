import { useRouter } from "next/router";
import { getCategoryData } from "../lib/categories";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Category(props) {
  const router = useRouter();

  if (props.hasError) {
    return <h1>404</h1>;
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="bg-black text-gray-400 h-screen md:px-20 flex flex-col items-center">
      <Navbar />
      <Link href={props.specificCategoryData.url} psasHref={true}>
        <h1>
          <a target="_blank" className="text-xl">
            {props.specificCategoryData.genre}
          </a>
        </h1>
      </Link>
      <div className="mb-2">
        {props.specificCategoryData.sub.map((genre) => {
          return (
            <li key={genre.id} className="list-none m-4">
              <Link href={genre.url} psasHref={true}>
                <a target="_blank" className="text-decoration-line: underline">
                  {genre.genre}
                </a>
              </Link>
              <span> ⧉</span>
            </li>
          );
        })}
      </div>
      <Link href="/" className="text-sm">
        Home
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for slug
  const data = await getCategoryData();
  const pathsWithParams = data.categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // Fetch necessary data
  const itemSlug = context.params?.slug;
  const data = await getCategoryData();
  const foundCat = data.categories.find((item) => itemSlug === item.slug);

  if (!foundCat) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      specificCategoryData: foundCat,
    },
  };
}
