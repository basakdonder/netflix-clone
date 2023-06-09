import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import MovieContainer from "./MovieContainer"

export default function MovieList({ movies, genres, handleMyListClick }) {
  return (
    <Splide
      options={{
        perPage: 6,
        pagination: false,
        gap: "0.7rem",
        autoWidth: true,
        drag: false,
        breakpoints: {
          768: {
            perPage: 2,
          },
        },
      }}
      className="splide-slide"
    >
      {movies?.map((movie) => (
        <SplideSlide key={movie.id} className="splide-slide--item">
          <MovieContainer
            movie={movie}
            genres={genres}
            handleMyListClick={handleMyListClick}
          />
        </SplideSlide>
      ))}
    </Splide>
  )
}
