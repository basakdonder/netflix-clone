const { NextResponse } = require("next/server")

export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  )
  const data = await res.json()

  return NextResponse.json({ data })
}
