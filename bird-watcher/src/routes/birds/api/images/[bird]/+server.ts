import { env } from "$env/dynamic/private";
import { json } from "@sveltejs/kit";

export async function GET({params}: {params: {bird: string}}) {
  const images = await fetch(`https://www.googleapis.com/customsearch/v1?key=${env.GOOGLE_API_KEY}&cx=${env.GOOGLE_SEARCH_MOTOR_ID}&searchType=image&q=${params.bird}&num=10`)
  return json({images: (await images.json()).items});
}