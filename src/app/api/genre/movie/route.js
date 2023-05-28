const { NextResponse } = require("next/server");

export async function GET() {
    const res = await fetch(`${process.env.API_ENDPOINT}/genre/movie/list?api_key=${process.env.API_KEY}`);
    const data = await res.json()

    return NextResponse.json({data})
}