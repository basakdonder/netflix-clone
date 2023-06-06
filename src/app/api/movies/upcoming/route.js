const { NextResponse } = require("next/server")

export async function GET() {
  const res = await fetch(
    `${process.env.API_ENDPOINT}/movie/upcoming?api_key=${process.env.API_KEY}`,
  )
  const data = await res.json()

  return NextResponse.json({ data })
}
