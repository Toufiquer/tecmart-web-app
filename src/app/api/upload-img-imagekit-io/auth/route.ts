import type { NextApiRequest, NextApiResponse } from "next";

import ImageKit from "imagekit";

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
});
const data = {
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
};
console.log("backed data: ", data);
const responseJson = (
  status: number,
  method: string,
  data: any,
  body?: any
) => ({
  data,
  body: body || "",
  status,
  message: `${method} request successful invoke`,
});

/** Get api */
/** requestApi: {} */
/** responseApi: responseApiType */
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const query = { auth: {} };
  query.auth = imagekit.getAuthenticationParameters();
  console.log(" auth send : ", query.auth);
  return new Response(
    JSON.stringify(responseJson(200, "Get", "Response Data", query))
  );
}
