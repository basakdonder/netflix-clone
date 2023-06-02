"use client"
import axios from "axios"
import Image from "next/image"
import NetflixSymbol from "/src/app/assets/img/Netflix_Symbol_RGB.png"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleInfo,
  faPlay,
  faPlus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

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
              <p className="banner-area--info_overview">
                {movies[0]?.overview}
              </p>
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

      <div className="content-area">
        <div className="slide-wrapper">
          <h2 className="slide-wrapper--title">Popular on Netflix</h2>
          <Splide
            options={{
              perPage: 6,
              pagination: false,
              type: "loop",
              padding: "5rem",
              gap: "0.7rem",
            }}
            className="splide-slide"
          >
            {movies?.map((movie) => (
              <SplideSlide key={movie.id} className="splide-slide--item">
                <div className="splide-slide--container">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    width={300}
                    height={0}
                    className="splide-slide--container-img"
                  />
                  <div className="splide-slide--container-body">
                    <div>
                      <button className="btn play">
                        <FontAwesomeIcon icon={faPlay} />
                      </button>
                      <button className="btn">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                      <button className="btn">
                        <FontAwesomeIcon icon={faThumbsUp} />
                      </button>
                    </div>
                    <div>
                      <span className="vote-average">
                        {movie.vote_average}/10
                      </span>
                      <span className="is-adult">{movie.adult ? "" : "18+"}</span>
                      <span className="release-date">{movie.release_date.substring(0,4)}</span>
                    </div>
                    <ul className="genre-list">
                      {genres?.map((genre) =>
                        movie.genre_ids.includes(genre.id) ? (
                          <li key={genre.id} className="genre-list--item">
                            {genre.name}
                          </li>
                        ) : (
                          ""
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  )
}

export default Home
