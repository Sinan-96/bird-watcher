import { env } from "$env/dynamic/private";
import { json } from "@sveltejs/kit";

interface Image {
  image: { byteSize: number; }
}

export async function GET({params}: {params: {bird: string}}) {
  const output = await fetch(`https://www.googleapis.com/customsearch/v1?key=${env.GOOGLE_API_KEY}&cx=${env.GOOGLE_SEARCH_MOTOR_ID}&searchType=image&q=${params.bird}`)
  const images = (await output.json()).items.filter((image:Image) => image.image.byteSize < 100000);
  return json({images});
}