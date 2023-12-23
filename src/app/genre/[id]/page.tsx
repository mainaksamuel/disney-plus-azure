interface GenreIdPageProps {
  params: {
    id: string;
  };
  searchParams: {
    genre?: string;
  };
}

export default function GenreIdPage({
  params: { id },
  searchParams: { genre },
}: GenreIdPageProps) {
  return (
    <main>
      <h1>Genre Id: {id} Page</h1>
      <p>Search Params: {genre}</p>
    </main>
  );
}
