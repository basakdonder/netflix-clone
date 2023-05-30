import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import Image from "next/image"
import Link from "next/link"
import Logo from "/src/app/assets/img/Netflix_Logo_RGB.png"
import Avatar from "/src/app/assets/img/Netflix-avatar.png"

export default function Header() {

  return (
    <nav className="navbar">
      <div className="flex flex-row">
        <Link href="/">
          <Image
            src={Logo}
            alt="Netflix Logo"
            className="logo"
            width={150}
            height={0}
          />
        </Link>
        <ul className="nav-items">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/tv-shows">TV Shows</Link>
          </li>
          <li className="nav-item">
            <Link href="/movies">Movies</Link>
          </li>
          <li className="nav-item">
            <Link href="/news">Recently Added</Link>
          </li>
          <li className="nav-item">
            <Link href="/my-list">My List</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-row">
        <ul className="search-items">
          <li className="search-item">
            <Link href="/">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-icon" />
            </Link>
          </li>
          <li className="search-item">
            <Link href="/">KIDS</Link>
          </li>
          <li className="search-item">
            <Link href="/">DVD</Link>
          </li>
          <li className="search-item">
            <Link href="/">
              <FontAwesomeIcon icon={faBell} className="fa-icon" />
            </Link>
          </li>
        </ul>
        <Link href="/">
          <Image
            src={Avatar}
            alt="Avatar"
            className="avatar"
            width={40}
            height={0}
          />
          <FontAwesomeIcon icon={faCaretDown} className="fa-icon w-2.5" />
        </Link>
      </div>
    </nav>
  )
}
