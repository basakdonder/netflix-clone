"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    const fetchMovies = async () => {
      const { data } = await axios.get("/api/movies");
      setMovies(data?.data.results);
    }

    const fetchMovieGenre = async () => {
      const { data } = await axios.get("/api/genre/movie");
      setGenres(data?.data.genres);
    }

    useEffect(() => {
      fetchMovies();
      fetchMovieGenre();
    }, []);

  return (
    <>
        <h1 className="test">Movies</h1>
        {
            movies?.map((movie) => (
              <div key={movie.id}>
                <p>{movie.title}</p>
                {
                  genres?.map((genre)=> (
                    movie.genre_ids.includes(genre.id) ? <li key={genre.id}>{genre.name}</li> : ""
                  ))
                }
              </div>
            ))
        }
    </>
  )
}

export default Home
