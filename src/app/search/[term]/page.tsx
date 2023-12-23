import { notFound } from "next/navigation";

interface SearchPageProps {
  params: {
    term: string;
  };
}

export default function SearchTermPage({ params: { term } }: SearchPageProps) {
  if (!term) return notFound();

  const searchTerm = decodeURI(term);

  // API call to search movies
  // API call to get popular movies

  return (
    <div>
      <h1>Search Page</h1>
      <div className="flex gap-2">
        <h2>You Searched for :</h2>
        <p>{searchTerm}</p>
      </div>
    </div>
  );
}
