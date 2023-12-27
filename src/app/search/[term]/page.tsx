import AISuggestion from "@/components/AISuggestion";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

interface SearchPageProps {
  params: {
    term: string;
  };
}

export default async function SearchTermPage({
  params: { term },
}: SearchPageProps) {
  if (!term) return notFound();

  const searchTerm = decodeURI(term);

  const searchResults = await getSearchedMovies(searchTerm);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Results for <span className="italic text-gray-400">{searchTerm}</span>
        </h1>

        <AISuggestion term={searchTerm} />

        <MoviesCarousel title="Movies" movies={searchResults} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}
