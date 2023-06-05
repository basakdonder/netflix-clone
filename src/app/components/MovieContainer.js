import { faPlay, faPlus, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react"

function MovieContainer({ movie, genres }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="splide-slide--container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={
          isHovered
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${movie.poster_path}`
        }
        alt={movie.title}
        width={300}
        height={0}
        className="splide-slide--container-img"
      />
      <div className="splide-slide--container-body">
        <div className="splide-slide--container-body__options">
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
        <div className="splide-slide--container-body__info">
          <span className="vote_average">{movie.vote_average}/10</span>
          <span className="is_adult">{movie.adult ? "" : "18+"}</span>
          <span className="release_date">
            {movie.release_date.substring(0, 4)}
          </span>
        </div>
        <ul className="genre-list">
          {genres?.map((genre) =>
            movie.genre_ids.slice(0,3).includes(genre.id) ? (
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
  )
}

export default MovieContainer
