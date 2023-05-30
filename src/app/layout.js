import "./assets/css/globals.css"
import "./assets/css/tw.scss"
import { Inter } from 'next/font/google';
import Header from "./components/header/layout"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone coded with Next.js 13 and TMDB API",
  icons: {
    icon:"/favicon.ico",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <section>{children}</section>
      </body>
    </html>
  )
}
