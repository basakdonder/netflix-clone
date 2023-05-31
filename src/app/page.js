"use client"
import axios from "axios"
import Image from "next/image"
import NetflixSymbol from "/src/app/assets/img/Netflix_Symbol_RGB.png"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons"

function Home() {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [show, setShow] = useState(true)

  const fetchMovies = async () => {
    const { data } = await axios.get("/api/movies")
    setMovies(data?.data.results)
  }

  const fetchMovieGenre = async () => {
    const { data } = await axios.get("/api/genre/movie")
    setGenres(data?.data.genres)
  }

  useEffect(() => {
    fetchMovies()
    fetchMovieGenre()
    const time = setTimeout(() => {
      setShow(false)
    }, 5000)

    return () => {
      clearTimeout(time)
    }
  }, [])

  return (
    <div className="page-content">
      <div className="banner-area">
        <div
          className="banner-area--wrapper"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movies[0]?.backdrop_path}")`,
          }}
        >
          <div className="banner-area--info">
            <div className="title--wrapper">
              <Image src={NetflixSymbol} alt="Netflix" width={30} height={30} />
              <span>Film</span>
            </div>
            <h1 className="banner-area--info_movie-title">
              {movies[0]?.title}
            </h1>
            {show ? (
              <>
                <p className="banner-area--info_overview">
                  {movies[0]?.overview}
                </p>{" "}
                <ul className="genre-list">
                  {genres?.map((genre) =>
                    movies[0]?.genre_ids.includes(genre.id) ? (
                      <li key={genre.id} className="genre-list--item">
                        {genre.name}
                      </li>
                    ) : (
                      ""
                    ),
                  )}
                </ul>
              </>
            ) : (
              ""
            )}
            <div className="button-wrapper">
              <button className="btn play">
                <FontAwesomeIcon icon={faPlay} className="fa-icon" /> Play
              </button>
              <button className="btn info">
                <FontAwesomeIcon icon={faCircleInfo} className="fa-icon" /> Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
