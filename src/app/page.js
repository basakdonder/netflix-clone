"use client";
import { useEffect, useState } from "react"

function Home() {
    const [movies, setMovies] = useState([])
    useEffect(() => {

      const fetchData = async () => {
        fetch('/api/movies')
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.data.results);
          });
      }
      fetchData();
      }, []);

  return (
    <>
        <h1>Movies</h1>
        {
            movies?.map((movie) => (
                <p key={movie.id}>{movie.title}</p>
            ))
        }
    </>
  )
}

export default Home
