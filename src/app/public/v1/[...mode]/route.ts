import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: { mode: string } }) => {
  const { searchParams } = new URL(request.url);
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const res = await fetch(`https://forex-api.coin.z.com/public/v1/${params.mode}?${searchParams.toString()}`);
  return NextResponse.json(await res.json(), { status: res.status, headers: cors });
};
