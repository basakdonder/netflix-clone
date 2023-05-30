import "./assets/css/globals.css"
import "./assets/css/tw.scss"
import Header from "./components/header/layout"

export const metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone coded with Next.js 13 and TMDB API",
  icons: {
    icon: "./assets/img/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <section>{children}</section>
      </body>
    </html>
  )
}
