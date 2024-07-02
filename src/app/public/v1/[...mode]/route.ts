import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (request: Request, { params }: { params: { mode: string } }) => {
  const { searchParams } = new URL(request.url);
  const res = await fetch(`https://forex-api.coin.z.com/public/v1/${params.mode}?${searchParams.toString()}`);
  const json = await res.json();

  return NextResponse.json(json, {
    status: res.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
