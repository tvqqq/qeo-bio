import { rewrite } from "@vercel/edge";
import { get } from "@vercel/edge-config";

export const config = {
  runtime: "edge",
  matcher: ["/(\\w+)"],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const urlPath = url.pathname.substring(1);
  console.log("🚀 ~ file: middleware.ts:9 ~ middleware ~ url:", url.pathname);
  // console.log("env", process.env.TINYBIRD_API_KEY);

  const qeobio = await get("qeobio");
  if (qeobio && qeobio[urlPath]) {
    return rewrite(new URL(qeobio[urlPath], request.url));
  }
}
