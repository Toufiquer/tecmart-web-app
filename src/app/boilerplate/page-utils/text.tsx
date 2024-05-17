import type { NextApiRequest, NextApiResponse } from "next";

type responseApiType = {
  data: any;
  body?: any;
  status: number;
  message: string;
};
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
  return new Response(
    JSON.stringify(responseJson(200, "Get", "Response Data"))
  );
}

/** POST api */
/** requestApi: {body} */
/** responseApi: responseApiType */
export async function POST(
  req: NextApiRequest & { json: () => void },
  res: NextApiResponse
) {
  const body = await req.json();
  return new Response(
    JSON.stringify(responseJson(200, "Post", "Response Data", body))
  );
}

/** PUT api */
/** requestApi: {body} */
/** responseApi: responseApiType */
/** it can change all data */
export async function PUT(
  req: NextApiRequest & { json: () => { id: string; data: any } },
  res: NextApiResponse
) {
  const body = await req.json();
  return new Response(
    JSON.stringify(responseJson(200, "PUT", "Response Data", body))
  );
}

/** PATCH api */
/** requestApi: {body} */
/** responseApi: responseApiType */
/** only change particular data not change all data  */
export async function PATCH(
  req: NextApiRequest & { json: () => void },
  res: NextApiResponse
) {
  const body = await req.json();
  return new Response(
    JSON.stringify(responseJson(200, "PATCH", "Response Data", body))
  );
}

/** DELETE api */
/** requestApi: {} */
/** responseApi: responseApiType */
export async function DELETE(
  req: NextApiRequest & { json: () => void },
  res: NextApiResponse
) {
  return new Response(
    JSON.stringify(responseJson(200, "DELETE", "Response Data"))
  );
}
