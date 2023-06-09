"use client"
import axios from "axios"
import Image from "next/image"
import NetflixSymbol from "/src/app/assets/img/Netflix_Symbol_RGB.png"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons"
import "@splidejs/react-splide/css"
import MovieList from "./components/MovieList"

function Home() {
  const [movies, setMovies] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [genres, setGenres] = useState([])
  const [show, setShow] = useState(true)
  const [myList, setMyList] = useState([])

  const saveToLS = (movie) => {
    localStorage.setItem("my-list", JSON.stringify(movie))
  }

  const addMyList = (movie) => {
    const newMyList = [...myList, movie]
    setMyList(newMyList)
    saveToLS(newMyList)
  }

  const removeMyList = (movie) => {
    const newMyList = myList.filter((m) => m.id !== movie.id)
    setMyList(newMyList)
    saveToLS(newMyList)
  }

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
    const lsMyList = JSON.parse(localStorage.getItem("my-list"));
    setMyList(lsMyList);
  }, [])

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
          <MovieList
            movies={movies}
            genres={genres}
            handleMyListClick={addMyList}
          />
        </div>
        <div className="slide-wrapper">
          <h2 className="slide-wrapper--title">My List</h2>
          <MovieList
            movies={myList}
            genres={genres}
            handleMyListClick={removeMyList}
          />
        </div>
        <div className="slide-wrapper">
          <h2 className="slide-wrapper--title">Upcoming</h2>
          <MovieList
            movies={upcoming}
            genres={genres}
            handleMyListClick={addMyList}
          />
        </div>
        <div className="slide-wrapper">
          <h2 className="slide-wrapper--title">Top Rated</h2>
          <MovieList
            movies={topRated}
            genres={genres}
            handleMyListClick={addMyList}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
