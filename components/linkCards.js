import Link from "next/link";

export default function LinkCards(props) {
  return (
    <div className="flex flex-wrap justify-center bg-black">
      {props.data.categories.map((category) => (
        <div
          key={category.id}
          className="relative flex items-center space-x-3 border border-gray-400 bg-transparent w-72 px-5 py-3 m-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-red-700"
        >
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full">{category.emoji}</div>
          </div>
          <div className="min-w-0 flex-1">
            <Link
              key={category.id}
              href={category.slug}
              className="focus:outline-none"
            >
              <div>
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-400">
                  {category.genre}
                </p>
                <p className="truncate text-sm text-gray-400">
                  ({category.sub.length})
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
