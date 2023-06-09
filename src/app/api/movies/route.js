const { NextResponse } = require("next/server")

export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  )
  const data = await res.json()

  return NextResponse.json({ data })
}
