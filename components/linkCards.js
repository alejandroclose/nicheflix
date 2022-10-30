import categories from "../data/flix.json"

export default function LinkCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 bg-black">
      {categories().map((person) => (
        <div
          key={person.id}
          className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full">{person.emoji}</div>
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{person.genre}</p>
              <p className="truncate text-sm text-gray-500">({person.sub.length})</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
