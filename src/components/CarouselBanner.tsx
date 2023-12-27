"use client";

import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface CarouselBannerProps {
  movies: Movie[];
}

Autoplay.globalOptions = {
  delay: 8000,
};

export default function CarouselBanner({ movies }: CarouselBannerProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-0 flex-full relative">
            <Image
              src={getImagePath(movie.backdrop_path || movie.poster_path, true)}
              alt={`carousel image for ${movie.title}`}
              height={1080}
              width={1920}
            />

            <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 to-transparent p-10 space-y-5 text-white">
              <h2 className="text-5xl font-bold max-w-xl z-50">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-2"> {movie.overview} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
    </div>
  );
}
