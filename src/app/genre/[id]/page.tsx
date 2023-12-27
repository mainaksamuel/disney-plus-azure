import MoviesCarousel from "@/components/MoviesCarousel";
import OpenAIAzureSuggestion from "@/components/OpenAIAzureSuggestion";
import { getDiscoverMovies } from "@/lib/getMovies";

interface GenreIdPageProps {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
}

export default async function GenreIdPage({
  params: { id },
  searchParams: { genre },
}: GenreIdPageProps) {
  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Results for <span className="italic text-purple-200">{genre}</span>{" "}
        </h1>
        <OpenAIAzureSuggestion term={genre} />
        <MoviesCarousel movies={movies} isVertical />
      </div>
    </div>
  );
}
