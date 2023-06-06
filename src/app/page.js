"use client"
import axios from "axios"
import Image from "next/image"
import NetflixSymbol from "/src/app/assets/img/Netflix_Symbol_RGB.png"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleInfo,
  faPlay,
} from "@fortawesome/free-solid-svg-icons"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import MovieContainer from "./components/MovieContainer"

function Home() {
  const [movies, setMovies] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [genres, setGenres] = useState([])
  const [show, setShow] = useState(true)

  const fetchMovies = async () => {
    const { data } = await axios.get("/api/movies")
    setMovies(data?.data.results)
  }

  const fetchTopRatedMovies = async () => {
    const { data } = await axios.get("/api/movies/top-rated")
    setTopRated(data?.data.results)
  }

  const fetchUpcomingMovies = async () => {
    const { data } = await axios.get("/api/movies/upcoming")
    setUpcoming(data?.data.results)
  }

  const fetchMovieGenre = async () => {
    const { data } = await axios.get("/api/genre/movie")
    setGenres(data?.data.genres)
  }

  useEffect(() => {
    fetchMovies()
    fetchMovieGenre()
    fetchTopRatedMovies()
    fetchUpcomingMovies()
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
          <h2 className="slide-wrapper--title">Popular</h2>
          <Splide
            options={{
              perPage:6,
              pagination: false,
              arrows:false,
              type: "loop",
              padding: "5rem",
              gap: "0.7rem",
              autoWidth:true,
              breakpoints: {
                768: {
                  perPage:2,
                  padding:0,
                  autoWidth:true,
                }
              }
            }}
            className="splide-slide"
          >
            {movies?.map((movie) => (
              <SplideSlide key={movie.id} className="splide-slide--item">
                <MovieContainer movie={movie} genres={genres} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="slide-wrapper">
          <h2 className="slide-wrapper--title">Top Rated</h2>
          <Splide
            options={{
              perPage:6,
              pagination: false,
              arrows:false,
              type: "loop",
              padding: "5rem",
              gap: "0.7rem",
              autoWidth:true,
              breakpoints: {
                768: {
                  perPage:2,
                  padding:0,
                  autoWidth:true,
                }
              }
            }}
            className="splide-slide"
          >
            {topRated?.map((movie) => (
              <SplideSlide key={movie.id} className="splide-slide--item">
                <MovieContainer movie={movie} genres={genres} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="slide-wrapper">
          <h2 className="slide-wrapper--title">Upcoming Movies</h2>
          <Splide
            options={{
              perPage:6,
              pagination: false,
              arrows:false,
              type: "loop",
              padding: "5rem",
              gap: "0.7rem",
              autoWidth:true,
              breakpoints: {
                768: {
                  perPage:2,
                  padding:0,
                  autoWidth:true,
                }
              }
            }}
            className="splide-slide"
          >
            {upcoming?.map((movie) => (
              <SplideSlide key={movie.id} className="splide-slide--item">
                <MovieContainer movie={movie} genres={genres} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  )
}

export default Home
