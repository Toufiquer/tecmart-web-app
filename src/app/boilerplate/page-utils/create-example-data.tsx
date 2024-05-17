/*
|-----------------------------------------
| setting up CreateExampleData for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/



  //   boilerPlate: [
  //           {
  //             id: "1",
  //             name: "",
  //             description: "",
  //             content: [{ id: "1", name: "", code: [""], fileName: "" }],
  //           },
  //         ],
  // examplePath: "",
            
    
import { boilerPageInterface } from "./type";

export const exampleBoilerPlateData: boilerPageInterface = {
  pageName: "BoilerPlate",
  data: [
    {
      context: [
        {
          id: "001",
          important: true,
          title: "NEXT",
          documentation: [
            {
              id: "1",
              url: "https://nextjs.org/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/create-next-app",
              name: "Go NPM",
            },
          ],
          description: [
            "The React Framework for the Web",
            "To create front-end and backend",
          ],
          code: [
            { id: "1", Terminal: "npx create-next-app@latest" },
            { id: "2", npm: "npx create-next-app@latest" },
            { id: "3", yarn: "yarn create next-app" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "nextJs environment Setup",
              description:
                "You can configure your api key with the help of environment variables",
              content: [
                {
                  id: "1",
                  name: "Export",
                  fileName: ".env.local",
                  code: ["MONGOOSE_URI=exampleOfHash"],
                },
                {
                  id: "2",
                  name: "Import",
                  fileName: "app.tsx | your file name",
                  code: ["process.env.MONGOOSE_URI"],
                },
                {
                  id: "3",
                  name: "Backend Api",
                  fileName: "route.ts",
                  code: [
                    `
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
  message: \`\${method} request successful invoke\`,
});

interface ParsedUrl {
  page?: number;
  limit?: number;
  s?: string;
  basePath: string;
}

const parseUrl = (url: string): ParsedUrl => {
  const parsedUrl = new URL(url);
  const params: Record<string, string | number> = {};
  parsedUrl.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  let result: ParsedUrl = {
    page: +params.page,
    limit: +params.limit,
    s: params.s + "",
    basePath: parsedUrl.pathname.split("/")[1],
  };
  return result;
};

/** Get api */
/** requestApi: {} */
/** responseApi: responseApiType */
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const query = parseUrl(req.url || "");
  return new Response(
    JSON.stringify(responseJson(200, "Get", "Response Data", query))
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


                    `,
                  ],
                },
                {
                  id: "4",
                  name: "Images",
                  fileName: "app.tsx | your file name",
                  code: [
                    `  <Image
      src="/example.jpb"
      width={500}
      height={500}
      alt="Picture of the author"
    />`,
                  ],
                },
              ],
            },
          ],
          examplePath: "src/example-design/",
        },
        {
          id: "009",
          important: true,
          title: "REACT-HOOK-FORM",
          documentation: [
            {
              id: "1",
              url: "https://react-hook-form.com/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/react-hook-form",
              name: "Go NPM",
            },
          ],
          description: [
            "Performant, flexible and extensible forms with easy-to-use validation.",
            "Faster create form with validation",
          ],
          code: [
            { id: "1", npm: "npm install react-hook-form" },
            { id: "2", yarn: "yarn add react-hook-form" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "Basic template",
              description:
                "The following code excerpt demonstrates a basic usage example",
              content: [
                {
                  id: "1",
                  name: "Import and Type",
                  code: [
                    `import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = { example: string; exampleRequired: string };
`,
                  ],
                  fileName: "form.tsx",
                },
                {
                  id: "2",
                  name: "function",
                  code: [
                    `const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
`,
                  ],
                  fileName: "form.tsx",
                },
                {
                  id: "4",
                  name: "function",
                  code: [
                    `/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
<form onSubmit={handleSubmit(onSubmit)}>
  {/* register your input into the hook by invoking the "register" function */}
  <input defaultValue="test" {...register("example")} />
  {/* include validation with required or other standard HTML validation rules */}
  <input {...register("exampleRequired", { required: true })} />
  {/* errors will return when field validation fails  */}
  {errors.exampleRequired && <span>This field is required</span>}
  <input type="submit" />
</form>;`,
                  ],
                  fileName: "form.tsx",
                },
              ],
            },
          ],
          examplePath: "",
        },
      ],
    },
  ],
};
