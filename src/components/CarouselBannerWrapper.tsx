import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

interface CarouselBannerWrapperProps {
  id?: string;
  keywords?: string;
}

export default async function CarouselBannerWrapper({
  id,
  keywords,
}: CarouselBannerWrapperProps) {
  const movies = await getDiscoverMovies(id, keywords);
  return (
    <div>
      <CarouselBanner movies={movies} />
    </div>
  );
}
