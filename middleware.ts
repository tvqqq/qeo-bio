import { rewrite } from "@vercel/edge";
import { get } from "@vercel/edge-config";

export const config = {
  runtime: "edge",
  matcher: ["/(\\w+)"],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const urlPath: string = url.pathname.substring(1);
  const qeobio: { [key: string]: any } = (await get("qeobio")) || [];
  if (qeobio && qeobio[urlPath]) {
    return rewrite(new URL(qeobio[urlPath], request.url));
  }
}
