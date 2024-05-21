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
                  code: [
                    `MONGOOSE_URI=exampleOfHash
NEXT_PUBLIC_MONGOOSE_URI=exampleOfHash`,
                  ],
                },
                {
                  id: "2.1",
                  name: "Import (Backend)",
                  fileName: "app.tsx | your file name",
                  code: ["process.env.MONGOOSE_URI"],
                },
                {
                  id: "2.2",
                  name: "Import (Front-end)",
                  fileName: "app.tsx | your file name",
                  code: ["process.env.NEXT_PUBLIC_MONGOOSE_URI"],
                },
                {
                  id: "3",
                  name: "Backend Api",
                  fileName: "route.ts",
                  code: [
                    `
import type { NextApiRequest, NextApiResponse } from "next";

type responseApiType = {
  data: {
    headers: { pageNo: number; limit: number; totalData: number };
    body: any[];
  };
  status: number;
  message: string;
};

const responseJson = (
  status: number,
  method: string,
  data: any
): responseApiType => ({
  data,
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
  const data = parseUrl(req.url || "");
  return new Response(
    JSON.stringify(
      responseJson(200, "GET", {
        headers: { pageNo: 1, limit: 1, totalData: 2 },
        body: ["Response Data", data],
      })
    )
  );
}


/** POST api */
/** requestApi: {body} */
/** responseApi: responseApiType */
export async function POST(
  req: NextApiRequest & { json: () => void },
  res: NextApiResponse
) {
  const data = await req.json();
  return new Response(
    JSON.stringify(
      responseJson(200, "POST", {
        headers: { pageNo: 1, limit: 1, totalData: 2 },
        body: ["Response Data", data],
      })
    )
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
  const data = await req.json();
  return new Response(
    JSON.stringify(
      responseJson(200, "PUT", {
        headers: { pageNo: 1, limit: 1, totalData: 2 },
        body: ["Response Data", data],
      })
    )
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
  const data = await req.json();
  return new Response(
    JSON.stringify(
      responseJson(200, "PATCH", {
        headers: { pageNo: 1, limit: 1, totalData: 2 },
        body: ["Response Data", data],
      })
    )
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
    JSON.stringify(
      responseJson(200, "DELETE", {
        headers: { pageNo: 1, limit: 1, totalData: 1 },
        body: ["Response Data"],
      })
    )
  );
}

                    `,
                  ],
                },
                {
                  id: "4.1",
                  name: "Images",
                  fileName: "app.tsx | your file name",
                  code: [
                    `<Image
  src="/example.jpg"
  width={500}
  height={500}
  alt="Picture of the author"
/>`,
                  ],
                },
                {
                  id: "4.3",
                  name: "Images with global uri",
                  fileName: "app.tsx",
                  code: [
                    `<div className="relative w-full h-[300px] max-w-[900px] max-h-[400px] border">
  <Image
    className="object-cover"
    src="https://ik.imagekit.io/tr/test-upload_-Lta5WoEuv.png?updatedAt=1715950569636"
    fill
    sizes="(max-width: 900px) 100vw"
    alt="Stock Price Image"
  />
</div>`,
                  ],
                },
                {
                  id: "4.2",
                  name: "Images configuration",
                  fileName: "next.config.mjs | js",
                  code: [
                    `const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};`,
                  ],
                },
              ],
            },
          ],
          examplePath: "src/example-design/",
        },
        {
          id: "002",
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
                    `"use client"

const {
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
        {
          id: "003",
          important: true,
          title: "ZOD",
          documentation: [
            {
              id: "1",
              url: "https://zod.dev/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/zod",
              name: "Go NPM",
            },
          ],
          description: [
            "TypeScript-first schema validation with static type inference",
          ],
          code: [
            { id: "1", npm: "" },
            { id: "2", yarn: "yarn add " },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "Zod Schema",
              description: "You can validated form with this schema",
              content: [
                {
                  id: "1",
                  name: "Import Zod",
                  code: [`import { z } from "zod";`],
                  fileName: "where you create from",
                },
                {
                  id: "2",
                  name: "Import Zod",
                  code: [
                    `export const newItemSchema = z.object({
  item: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters")
    .trim(),
  price: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Please provide a number",
    })
    .optional(),
  info: z
    .string({ invalid_type_error: "Info must be a string" })
    .min(3, "Minimum 3 characters")
    .max(120, "Maximum 120 characters")
    .trim()
    .optional(),
  option: z
    .object({
      name: z
        .string({
          invalid_type_error: "Name must be a string",
          required_error: "Name is required",
        })
        .min(3, "Minimum 3 characters")
        .max(20, "Maximum 20 characters")
        .trim(),
      optionFor: z
        .string({ invalid_type_error: "OptionFor must be a string" })
        .min(3, "Minimum 3 characters")
        .max(60, "Maximum 60 characters")
        .trim()
        .optional(),
      required: z.boolean().optional(),
      options: z
        .object({
          name: z
            .string({ invalid_type_error: "Name must be a string" })
            .min(3, "Minimum 3 characters")
            .max(20, "Maximum 20 characters")
            .trim(),
          price: z
            .string()
            .refine((value) => !isNaN(parseFloat(value)), {
              message: "Please provide a number",
            })
            .optional(),
        })
        .array()
        .optional(),
    })
    .array()
    .optional(),
});`,
                  ],
                  fileName: "where you create from",
                },
                {
                  id: "3",
                  name: "Create type ",
                  code: [
                    `type newItemFormSchema = z.infer<typeof newItemSchema>;`,
                  ],
                  fileName: "where you create from",
                },
                {
                  id: "4",
                  name: "Create Schema ",
                  code: [
                    `const email = z.string().email({
  message: "Invalid email format. Please enter a valid email address.",
});

const mobileNumber = z.string().regex(/^\+(?:[0-9] ?){6,14}$/, {
  message:
    "Invalid phone number. Please enter a valid mobile number in international format (+ddd nnnnnnnnnn).",
});

const country = ["UK", "USA", "Bangladesh"];
const nationality = z.enum(["UK", "USA", "Bangladesh"], {
  message:
    "Invalid nationality. Please choose a valid nationality from the list (UK, USA, Bangladesh).",
});

enum Gender {
  Male = "Male",
  Female = "Female",
  Others = "Others",
}

const gender = z.enum(["Male", "Female", "Others"], {
  message:
    "Invalid gender. Please choose a valid gender option (Male, Female, Others).",
});

export const newItemSchema = z.object({
  firstName: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(120, "Maximum 120 characters")
    .trim(),
  lastName: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(120, "Maximum 120 characters")
    .trim(),
  email,
  gender,
  mobileNumber,
  nationality,
  address: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(320, "Maximum320 characters")
    .trim(),
});`,
                  ],
                  fileName: "where you create from",
                },
                {
                  id: "4",
                  name: "Validate with zod",
                  code: [
                    `<p className="text-sm text-rose-400">
  {errors.firstName.message}
</p>`,
                  ],
                  fileName: "where you create from",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "004",
          title: "REACT-TOAST",
          documentation: [
            {
              id: "1",
              name: "Go NPM ",
              url: "https://www.npmjs.com/package/react-toastify",
            },
          ],
          code: [
            { id: "1", npm: "npm i react-toastify" },
            { id: "2", yarn: "yarn add react-toastify" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "React-Toastify",
              description:
                "React-Toastify allows you to add notifications to your app with ease. No more nonsense!",
              content: [
                {
                  id: "2",
                  name: "Import ",
                  code: [
                    `import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';`,
                  ],
                  fileName: "App.tsx",
                },
                {
                  id: "3",
                  name: "Write down to your App Component",
                  code: [`<ToastContainer autoClose={5000} theme="dark"/>`],
                  fileName: "App.tsx",
                },
                {
                  id: "4",
                  name: "Import",
                  code: [`import { ToastContainer } from 'react-toastify';`],
                  fileName: "",
                },
                {
                  id: "5",
                  name: "invoke function normal",
                  code: [
                    ` const notify = () => toast("message_text",{autoClose: {5000}});`,
                  ],
                  fileName: "",
                },
                {
                  id: "6",
                  name: "invoke function success",
                  code: [
                    ` const notify = () => toast.success("message_text",{autoClose: {5000}});`,
                  ],
                  fileName: "",
                },
                {
                  id: "7",
                  name: "invoke function warning",
                  code: [
                    ` const notify = () => toast.warning("message_text",{autoClose: {5000}});`,
                  ],
                  fileName: "",
                },
              ],
            },
          ],
          examplePath: "arc/App.tsx",
        },
        {
          id: "005",
          important: true,
          title: "REDUX",
          documentation: [
            {
              id: "1",
              url: "https://redux.js.org/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/redux",
              name: "Go NPM",
            },
          ],
          description: ["Store management with Caching mechanism"],
          code: [
            { id: "1", npm: "npm i react-hook-form" },
            { id: "2", yarn: "yarn add react-hook-form" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "Redux toolkit query ",
              description: "You can use rtk query to cache and manage store",
              content: [
                {
                  id: "1",
                  name: "Create a global store",
                  code: [
                    `import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './../features/api/apiSlice';
import usersSlice from './../features/users/usersSlice';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import blogSlice from '../features/blog/blogSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        users: usersSlice,
        blogs: blogSlice,
    },

    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;`,
                  ],
                  fileName: "src/redux/app/store.ts",
                },
                {
                  id: "2",
                  name: "Create a global Provider and export it",
                  code: [
                    `'use client';

import {store} from '@/redux/app/store';
import {ReactNode} from 'react';
import {Provider} from 'react-redux';

export function ReduxProvider({children}: {children: ReactNode}) {
return <Provider store={store}>{children}</Provider>;
}`,
                  ],
                  fileName: "src/redux/provider.tsx",
                },
                {
                  id: "3",
                  name: "Import App Provider",
                  code: ["import {ReduxProvider} from '@/redux/provider';"],
                  fileName: "App.tsx",
                },

                {
                  id: "4",
                  name: "Wrap App Provider",
                  code: [" <ReduxProvider>{children}</ReduxProvider>"],
                  fileName: "App.tsx",
                },
                {
                  id: "5",
                  name: "Create api Slice",
                  code: [
                    `import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
        prepareHeaders: async (headers, {getState, endpoint}) => {
            const token = getState()?.auth?.accessToken;
            if (token) {
                headers.set('Authorization', \`Bearer \${token}\`);
            }
                return headers;
            },
        }),
    endpoints: builder => ({}),
});`,
                  ],
                  fileName: "App.tsx",
                },
                {
                  id: "6",
                  name: "Create thunk function using createApi [for post]",
                  code: [
                    `import {current} from '@reduxjs/toolkit';
import {apiSlice} from '../api/apiSlice';
import {initSinglePostDataType} from '@/app/post/page';


export const postsApi = apiSlice.injectEndpoints({

  endpoints: builder => ({
    // endpoints here


    getPosts: builder.query({
      query: () => \`/posts\`,
    }),


    getPost: builder.query({
      query: id => \`/posts/\${id}\`,
    }),

    updatePost: builder.mutation({
      query: ({id, data}) => ({
        url: \`/posts/\${id}\`,
        method: 'PATCH',
        body: data,
      }),

      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        // optimistic cache update start
        const patchResult1 = dispatch(
          apiSlice.util.updateQueryData(
            'getPosts',
            undefined,
            (draft: initSinglePostDataType[]) => {
              const newValue = draft.map(curr => {
                if (curr.id === parseInt(arg.id)) {
                  return {...curr, ...arg.data};
                } else {
                  return curr;
                }
              });
              Object.assign(draft, newValue);
            },
          ),
        );
        // optimistic cache update end
        try {
          const query = await queryFulfilled;
        } catch {
          patchResult1.undo();
        }
      },
    }),


    editPost: builder.mutation({
      query: arg => ({
        url: \`/posts/\${arg.id}\`,
        method: 'PATCH',
        body: arg,
      }),

      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        console.log(' patch query started', arg);
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getPosts', {}, draft => {
            console.log('post draft : ', JSON.stringify(draft));
            const others = draft.map(curr => {
              let result = {...curr};
              if (parseInt(curr.id) === parseInt(arg.id)) {
                result.title = arg.title;
              }
              return result;
            });
            Object.assign(draft, others);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }

        try {
          const query = await queryFulfilled;
          // pessimistic cache update start
          // if (query?.data?.id) {
          //   dispatch(
          //     apiSlice.util.updateQueryData(
          //       'getPosts',
          //       {},
          //       (draft: initSinglePostDataType[]) => {
          //         const newValue = draft.map(curr => {
          //           if (+curr.id === +arg.id) {
          //             return {...query?.data};
          //           } else {
          //             return curr;
          //           }
          //         });
          //         Object.assign(draft, newValue);
          //       },
          //     ),
          //   );
          // }
          // pessimistic cache update end
        } catch {
          patchResult.undo();
        }
      },
    }),


    deletePost: builder.mutation({
      query: id => ({
        url: \`/posts/$\{id}\`,
        method: 'DELETE',
      }),

      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getPosts', {}, draft => {
            const others = draft.filter(curr => {
              return parseInt(curr.id) !== parseInt(arg);
            });
            Object.assign(draft, others);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),


    addPost: builder.mutation({
      query: data => ({
        url: \`/posts\`,
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        console.log('rtk , arg: ', arg);
        dispatch(
          apiSlice.util.updateQueryData('getPosts', {}, draft => {
            draft.push({title: arg.title, id: 120});
          }),
        );
        try {
          await queryFulfilled;
          // pessimistic cache update end
        } catch {}
      },
    }),
  }),
});


export const {
  useGetPostsQuery,
  useGetPostQuery,
  useEditPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useAddPostMutation,
} = postsApi;
`,
                  ],
                  fileName: "src/redux/features/post/postApi.tsx",
                },
                {
                  id: "7",
                  name: "Create apiSlice using createSlice [for post]",
                  code: [
                    `import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const postsSlice = createSlice({
  name: 'posts',  
  initialState,  
  reducers: {},  
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;

// Must update store for using this slice, without updating it doesn't work properly`,
                  ],
                  fileName: "src/redux/features/post/postSlice.tsx",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "006",
          important: true,
          title: "ZUSTAND",
          documentation: [
            {
              id: "1",
              url: "https://zod.dev/?id=table-of-contents",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/zod",
              name: "Go NPM",
            },
          ],
          description: [""],
          code: [
            { id: "1", npm: "npm i zod" },
            { id: "2", yarn: "yarn add zod" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "ZuStand Template",
              description: "state management",
              content: [
                {
                  id: "1",
                  name: "demo code ",
                  code: [
                    `import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, inc } = useStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}
`,
                  ],
                  fileName: "global-store.tsx",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "007",
          important: true,
          title: "TANSTACK",
          documentation: [
            {
              id: "1",
              url: "https://tanstack.com/query/latest",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/@tanstack/react-query",
              name: "Go NPM",
            },
          ],
          description: [
            "Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular",
          ],
          code: [
            { id: "1", npm: "npm i @tanstack/react-query" },
            { id: "2", yarn: "yarn add @tanstack/react-query" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "A demo with tanStack Query",
              description: "",
              content: [
                {
                  id: "1",
                  name: "",
                  code: [
                    `import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1> <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
`,
                  ],
                  fileName: "",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "008",
          important: true,
          title: "Async Storage",
          documentation: [
            {
              id: "1",
              url: "",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "",
              name: "Go NPM",
            },
          ],
          description: [
            "AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.",
          ],
          code: [
            {
              id: "1",
              npm: "npm i @react-native-async-storage/async-storage",
            },
            {
              id: "2",
              yarn: "yarn add @react-native-async-storage/async-storage",
            },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "AsyncStorage",
              description: "example of code ",
              content: [
                {
                  id: "1",
                  name: "",
                  code: [
                    `import {AsyncStorage} from 'react-native';

await AsyncStorage.setItem('data')

await AsyncStorage.getItem('data')`,
                  ],
                  fileName: "",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "009",
          important: true,
          title: "MongoDB & Mongoose",
          documentation: [
            {
              id: "1",
              url: "https://www.mongodb.com/docs/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/mongodb",
              name: "Go NPM",
            },
          ],
          description: ["Database @ User friendly for JavaScript development"],
          code: [
            { id: "1", npm: "npm i mongodb" },
            { id: "2", yarn: "yarn add mongodb" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "Next Backend Api with mongoose ",
              description: "",
              content: [
                {
                  id: "1",
                  name: "Full api",
                  code: [
                    `import dbConnect from "@/lib/dbConnect";
import Rtk, { IRtk } from "@/models/Rtk";

import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const data: IRtk[] = await Rtk.find({});
  const result = { data, message: "get request invoked successfully" };
  return new Response(JSON.stringify(result));
}

export async function POST(
  req: NextApiRequest & { json: () => void },
  res: NextApiResponse
) {
  await dbConnect();

  const result = await req.json();

  const rtk: IRtk = await Rtk.create(result);
  return new Response(
    JSON.stringify({
      data: result,
      result: rtk,
      message: "Post request successful invoke",
    })
  );
}

/* it can change all data */
export async function PUT(
  req: NextApiRequest & { json: () => { id: string; data: any } },
  res: NextApiResponse
) {
  await dbConnect();
  const result = await req.json();
  const rtk: IRtk = await Rtk.updateOne(
    { _id: result.id },
    { name: result.title }
  );
  return new Response(
    JSON.stringify({
      data: result,
      result: rtk,
      message: "Put request successful invoke",
    })
  );
}

/*  only change particular data not change all data */
export async function PATCH(
  req: NextApiRequest & { json: () => void },
  res: NextApiResponse
) {
  await dbConnect();

  const result = await req.json();

  const rtk: IRtk = await Rtk.updateOne(
    { _id: result.id },
    { name: result.title }
  );
  return new Response(
    JSON.stringify({
      data: result,
      result: rtk,
      message: "Patch request successful invoke",
    })
  );
}

export async function DELETE(
  req: NextApiRequest & { json: () => void },
  res: NextApiResponse
) {
  await dbConnect();

  const result = await req.json();
  const rtk: IRtk = await Rtk.deleteOne({ _id: result.id });
  return new Response(
    JSON.stringify({
      data: result,
      result: rtk,
      message: "Patch request successful invoke",
    })
  );
}
`,
                  ],
                  fileName: "route.ts",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "010",
          title: "Copy To Clipboard",
          documentation: [
            {
              id: "1",
              url: "https://github.com/sudodoki/copy-to-clipboard#readme",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/copy-to-clipboard",
              name: "Go NPM",
            },
          ],
          description: [
            "Simple module exposing copy function that will try to use execCommand with fallback to IE-specific clipboardData interface and finally, resort to usual prompt with proper text content and message.",
          ],
          code: [
            { id: "1", npm: "npm i copy-to-clipboard" },
            { id: "2", yarn: "yarn add copy-to-clipboard" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "demo code ",
              description: "",
              content: [
                {
                  id: "1",
                  name: "",
                  code: [
                    `import copy from 'copy-to-clipboard';

copy('Text');`,
                  ],
                  fileName: "your-page.tsx",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "011",
          title: "MMKV",
          documentation: [
            {
              id: "1",
              url: "https://github.com/ammarahm-ed/react-native-mmkv-storage#readme",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/react-native-mmkv-storage",
              name: "Go NPM",
            },
          ],
          description: ["Fast Storage for react Native"],
          code: [
            { id: "1", npm: "npm i react-native-mmkv-storage" },
            { id: "2", yarn: "yarn add react-native-mmkv-storage" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "Create store",
              description: "",
              content: [
                {
                  id: "1",
                  name: "Create a store",
                  code: [
                    `import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: \`user-\${userId}-storage\`,
  path: \`\${USER_DIRECTORY}/storage\`,
  encryptionKey: 'hunter2'
})`,
                  ],
                  fileName: "your-file.tsx",
                },
                {
                  id: "2",
                  name: "update store ",
                  code: [
                    `Set
storage.set('user.name', 'Marc')
storage.set('user.age', 21)
storage.set('is-mmkv-fast-asf', true)


Get
const username = storage.getString('user.name') // 'Marc'
const age = storage.getNumber('user.age') // 21
const isMmkvFastAsf = storage.getBoolean('is-mmkv-fast-asf') // true


Keys
// checking if a specific key exists
const hasUsername = storage.contains('user.name')

// getting all keys
const keys = storage.getAllKeys() // ['user.name', 'user.age', 'is-mmkv-fast-asf']

// delete a specific key + value
storage.delete('user.name')

// delete all keys
storage.clearAll()`,
                  ],
                  fileName: "your-file.tsx",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "012",
          important: true,
          title: "REACT-ADMIN",
          documentation: [
            {
              id: "1",
              url: "https://marmelab.com/react-admin/documentation.html",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/react-admin",
              name: "Go NPM",
            },
          ],
          description: [
            "A frontend Framework for building data-driven applications running in the browser on top of REST/GraphQL APIs, using ES6, React and Material Design. Previously named admin-on-rest. Open sourced and maintained by marmelab.",
          ],
          code: [
            { id: "1", npm: "npm i react-admin" },
            { id: "2", yarn: "yarn add react-admin" },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "Example of React-Admin",
              description: "using json-placeholder for JSON data or backend",
              content: [
                {
                  id: "1",
                  name: "Create a  dataProvider",
                  code: [
                    `import queryString from "query-string";
import { fetchUtils, RaRecord } from "react-admin";

const apiUrl = "https://jsonplaceholder.typicode.com";
const httpClient = fetchUtils.fetchJson;

interface GetListParams {
  pagination: { page: number; perPage: number };
  sort: { field: string; order: "ASC" | "DESC" };
  filter: any;
  meta?: any;
  id?: any;
  ids?: any;
  data?: any;
  target?: any;
}
interface GetListResult {
  data: RaRecord[];
  total?: number;
  // if using partial pagination
  pageInfo?: {
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
  };
}

const dataProvider = {
  
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      // sort: JSON.stringify([field, order]),
      // range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      _start: JSON.stringify((page - 1) * perPage),
      _end: JSON.stringify((page - 1) * perPage + perPage),
      // filter: JSON.stringify(params.filter),
    };
    let totalCount = 0;
    await fetch(\`\${apiUrl}/\${resource}\`)
      .then((res) => res.json())
      .then((d) => (totalCount = d.length));
    const url = \`\${apiUrl}/\${resource}?\${queryString.stringify(query)}\`;
    const { json, headers } = await httpClient(url);

    return {
      data: json,
      total: parseInt(
        headers.get("content-range")?.split("/").pop() ||
          \`\${totalCount}\` ||
          json.length,
        10
      ),
    };
  },


  getOne: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const url = \`\${apiUrl}/\${resource}/\${params.id}\`;
    const { json } = await httpClient(url);
    return { data: json };
  },


  getMany: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = \`\${apiUrl}/\${resource}?\${query}\`;
    const { json } = await httpClient(url);
    return { data: json };
  },


  getManyReference: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = \`\${apiUrl}/\${resource}?\${query}\`;
    const { json, headers } = await httpClient(url);
    return {
      data: json,
      total: parseInt(headers.get("content-range")?.split("/").pop() || "", 10),
    };
  },



  create: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    console.log("create", params.data); // Create a new users
    const { json } = await httpClient(\`\${apiUrl}/\${resource}\`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },



  update: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const url = \`\${apiUrl}/\${resource}/\${params.id}\`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },



  updateMany: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = \`\${apiUrl}/\${resource}?\${query}\`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },



  delete: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const url = \`\${apiUrl}/\${resource}/\${params.id}\`;
    const { json } = await httpClient(url, {
      method: "DELETE",
    });
    return { data: json };
  },



  deleteMany: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = \`\${apiUrl}/\${resource}?\${query}\`;
    const { json } = await httpClient(url, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },
};


export default dataProvider;
`,
                  ],
                  fileName: "",
                },
                {
                  id: "2",
                  name: "Create a  layout",
                  code: [
                    `
import { Layout } from "react-admin";
import DashboardMenu from "./single-page-menu";

import { globalStyle } from "./style";
import DashboardAppBar from "./single-page-app-bar";

const DashboardLayout = (props: any) => (
  <Layout
    appBar={DashboardAppBar}
    {...props}
    menu={DashboardMenu}
    sx={{
      "& .RaLayout-appFrame": {
        ...globalStyle.background_dark,
        ...globalStyle.text_color,
      },
      "& .RaLayout-contentWithSidebar": {
        ...globalStyle.background_dark,
        ...globalStyle.text_color,
      },
      "& .RaLayout-content": {
        ...globalStyle.background_dark,
        ...globalStyle.text_color,
      },
    }}
  />
);
export default DashboardLayout;`,
                  ],
                  fileName: "",
                },
                {
                  id: "3",
                  name: "Create a app or Applications",
                  code: [
                    `<Admin dataProvider={dataProvider} layout={DashboardLayout}>
  <Resource
    icon={PeopleAltIcon}
    name="users"
    create={UserCreate}
    list={UserList}
    edit={EditUser}
    recordRepresentation="name"
  /> 
</Admin>`,
                  ],
                  fileName: "",
                },
                {
                  id: "4",
                  name: "Create a user-ui",
                  code: [
                    `import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { globalStyle } from "./style";

const CreateUser = () => {
  return (
    <Create
      sx={{
        label: {
          ...globalStyle.text_color_dark,
        },
        "& .RaCreate-main": {
          ...globalStyle.background_dark,
        },
        ".css-qmvuda-MuiToolbar-root-RaToolbar-root.RaToolbar-desktopToolbar": {
          ...globalStyle.background_dark,
        },
        "& .RaCreate-noActions": {
          ...globalStyle.background_dark,
        },
        "& .RaCreate-card": {
          ...globalStyle.background_dark,
        },
        ".MuiInputBase-root.MuiFilledInput-root.
        MuiFilledInput-underline.MuiInputBase-colorPrimary.
        MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.
        css-1lm524j-MuiInputBase-root-MuiFilledInput-root ":
          { ...globalStyle.text_color },
      }}
    >
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="username" validate={[required()]} fullWidth />
        <TextInput source="email" validate={[required()]} fullWidth />
        <TextInput source="address.street" validate={[required()]} fullWidth />
        <TextInput source="phone" validate={[required()]} fullWidth />
        <TextInput source="website" validate={[required()]} fullWidth />
        <TextInput source="company.name" validate={[required()]} fullWidth />
      </SimpleForm>
    </Create>
  );
};
export default CreateUser;`,
                  ],
                  fileName: "",
                },
                {
                  id: "5",
                  name: "Create a List to view users",
                  code: [
                    `import {
  CreateButton,
  DatagridConfigurable,
  useListContext,
  ExportButton,
  FilterButton,
  List,
  SelectColumnsButton,
  TopToolbar,
  SearchInput,
  Datagrid,
  TextField,
  TextInput,
  Pagination,
} from "react-admin";
const PostPagination = () => (
  <Pagination
    rowsPerPageOptions={[2, 4, 5, 6, 10, 25, 50, 100]}
    className={\`bg-[#363B7B] text-slate-200 rounded-b-lg py-8\`}
  />
);

import { globalStyle } from "./style";

const ListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const postFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const UserList = () => {
  return (
    <List
      pagination={<PostPagination />}
      sx={{
        "svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.
        MuiSelect-icon.MuiTablePagination-selectIcon.MuiSelect-iconStandard.
        css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":
          { ...globalStyle.text_color }, /// pagination icon
        ".MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.MuiTablePagination-toolbar.css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar":
          { ...globalStyle.text_color }, /// pagination
        ".MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.
        MuiInputBase-colorPrimary.MuiInputBase-formControl.
        MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.
        MuiInputBase-hiddenLabel.css-1y6feam-MuiInputBase-root-MuiFilledInput-root":
          {
            ...globalStyle.background_dark,
            ...globalStyle.text_color,
            borderBottom: "1px solid white",
            width: " 100%",
          }, // search input
        ".css-lxhw8h-MuiFormControl-root-MuiTextField-root-RaResettableTextField-root-RaSearchInput-root .RaResettableTextField-visibleClearIcon":
          {
            ...globalStyle.background_dark,
            ...globalStyle.text_color,
          }, //search icon
        "svg.MuiSvgIcon-root.MuiSvgIcon-colorDisabled.MuiSvgIcon-fontSizeMedium.css-1db085k-MuiSvgIcon-root":
          {
            ...globalStyle.background_dark,
            ...globalStyle.text_color,
          }, //search icon
        "& .RaList-actions": {
          ...globalStyle.p8,
          ...globalStyle.background_dark,
        },
        "& .RaList-content": {
          ...globalStyle.background_light,
        },
        "svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.
        MuiPaginationItem-icon.
        css-tnzq9a-MuiSvgIcon-root-MuiPaginationItem-icon":
          { ...globalStyle.text_color }, // pagination style
        ".MuiPaginationItem-root.MuiPaginationItem-sizeSmall.
        MuiPaginationItem-text.
        MuiPaginationItem-circular.MuiPaginationItem-ellipsis.
        css-1hfyor7-MuiPaginationItem-root":
          { ...globalStyle.text_color }, // pagination style
        "button.MuiButtonBase-root.MuiPaginationItem-root.
        MuiPaginationItem-sizeSmall.
        MuiPaginationItem-text.MuiPaginationItem-circular.
        MuiPaginationItem-page.
        css-1ba2zw7-MuiButtonBase-root-MuiPaginationItem-root":
          { ...globalStyle.text_color }, // pagination style
        "button.MuiButtonBase-root.MuiPaginationItem-root.
        MuiPaginationItem-sizeSmall.
        MuiPaginationItem-text.MuiPaginationItem-circular.
        Mui-selected.MuiPaginationItem-page.
        css-1ba2zw7-MuiButtonBase-root-MuiPaginationItem-root":
          {
            ...globalStyle.text_color,
            ...globalStyle.background_color_IndigoCent_dark,
          }, // pagination style
      }}
      actions={<ListActions />}
      filters={postFilters}
    >
      <Datagrid
        rowClick="show"
        sx={{
          "& .RaDatagrid-root": {
            ...globalStyle.text_color,
          },
          "& .RaDatagrid-rowCell": {
            ...globalStyle.py12,
            ...globalStyle.border_color,
            ...globalStyle.background_light,
          }, // each row cell
          "& .MuiCheckbox-root": {
            ...globalStyle.border_color,
            ...globalStyle.text_color_dark,
            ...globalStyle.background_light,
          }, // active header (checkbox)
          "span.MuiButtonBase-root.MuiCheckbox-root.
          MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.
          PrivateSwitchBase-root.MuiCheckbox-root.
          MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.
          MuiCheckbox-root.MuiCheckbox-colorPrimary.
          MuiCheckbox-sizeMedium.select-all.
          css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root":
            {
              ...globalStyle.background_banner,
              ...globalStyle.py8,
            }, // title bar
          "td.MuiTableCell-root.MuiTableCell-body.
          MuiTableCell-sizeSmall.column-id.
          RaDatagrid-rowCell.css-dsuxgy-MuiTableCell-root":
            {
              ...globalStyle.py26,
            },
          "& .RaDatagrid-tableWrapper .Mui-active": {
            ...globalStyle.background_banner,
            ...globalStyle.text_color_dark,
            ...globalStyle.font_bold,
            ...globalStyle.font_size16,
          }, // active header (Text)
          "& .RaDatagrid-tableWrapper .
          css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root:hover":
            {
              ...globalStyle.text_color,
              ...globalStyle.font_bold,
              ...globalStyle.font_size16,
            }, // active header (Text:hover)
          "& .RaDatagrid-tableWrapper .Mui-active .MuiTableSortLabel-icon": {
            ...globalStyle.background_banner,
            ...globalStyle.text_color_dark,
          }, // active header (Icon)
          "td.MuiTableCell-root.MuiTableCell-body.
          MuiTableCell-paddingCheckbox.MuiTableCell-sizeSmall.
          css-2u8re1-MuiTableCell-root":
            {
              ...globalStyle.border_color,
              ...globalStyle.background_light,
            }, // icon (Checkbox)
          "& .RaDatagrid-headerCell": {
            ...globalStyle.background_banner,
            ...globalStyle.text_color_dark,
            ...globalStyle.font_size16,
          },
        }}
      >
        <TextField source="id" color={globalStyle.text_color_dark} />
        <TextField source="name" color={globalStyle.text_color_dark} />
        <TextField source="username" color={globalStyle.text_color_dark} />
        <TextField source="email" color={globalStyle.text_color_dark} />
        <TextField
          source="address.street"
          color={globalStyle.text_color_dark}
        />
        <TextField source="phone" color={globalStyle.text_color_dark} />
        <TextField source="website" color={globalStyle.text_color_dark} />
        <TextField source="company.name" color={globalStyle.text_color_dark} />
      </Datagrid>
    </List>
  );
};
export default UserList;
`,
                  ],
                  fileName: "",
                },
                {
                  id: "6",
                  name: "Create a Edit UI to edit the user",
                  code: [
                    `import { Edit, SimpleForm, TextInput, required } from "react-admin";
import { globalStyle } from "./style";
const EditUser = () => {
  return (
    <Edit
      sx={{
        label: {
          ...globalStyle.text_color_dark,
        },
        ".css-qmvuda-MuiToolbar-root-RaToolbar-root.RaToolbar-desktopToolbar": {
          ...globalStyle.background_dark,
        },
        "& .RaEdit-main": {
          ...globalStyle.background_dark,
        },
        "& .RaEdit-noActions": {
          ...globalStyle.background_dark,
        },
        "& .RaEdit-card": {
          ...globalStyle.background_dark,
        },
        ".MuiInputBase-root.MuiFilledInput-root.
        MuiFilledInput-underline.MuiInputBase-colorPrimary.
        MuiInputBase-fullWidth.MuiInputBase-formControl.
        MuiInputBase-sizeSmall.css-1lm524j-MuiInputBase-root-MuiFilledInput-root ":
          { ...globalStyle.text_color },
      }}
    >
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="username" validate={[required()]} fullWidth />
        <TextInput source="email" validate={[required()]} fullWidth />
        <TextInput source="address.street" validate={[required()]} fullWidth />
        <TextInput source="phone" validate={[required()]} fullWidth />
        <TextInput source="website" validate={[required()]} fullWidth />
        <TextInput source="company.name" validate={[required()]} fullWidth />
      </SimpleForm>
    </Edit>
  );
};
export default EditUser;`,
                  ],
                  fileName: "",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "013",
          title: "Observation",
          documentation: [],
          description: ["It's a function who observes ui or a component"],
          code: [],
          boilerPlate: [
            {
              id: "1",
              name: "Observation api",
              description: "",
              content: [
                {
                  id: "1",
                  name: "create a useRef(), and write this function inside useEffect",
                  code: [
                    `  console.log("RefDiv", refId);
  const divRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        if (entry.isIntersecting) {
          // Element is visible

          console.log("Div is visible");
          console.log("ref Id :", refId);
          setSpyDiv(refId);
        } else {
          // Element is not visible
          console.log("Div is not visible");
          console.log("ref Id :", refId);
        }
      },
      { threshold: 0.02 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, [divRef]);
`,
                  ],
                  fileName: "",
                },
              ],
            },
          ],
          examplePath: "",
        },
        {
          id: "",
          title: "",
          documentation: [
            {
              id: "1",
              url: "",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "",
              name: "Go NPM",
            },
          ],
          description: [""],
          code: [
            { id: "1", npm: "" },
            { id: "2", yarn: "yarn add " },
          ],
          boilerPlate: [
            {
              id: "1",
              name: "",
              description: "",
              content: [{ id: "1", name: "", code: [""], fileName: "" }],
            },
          ],
          examplePath: "",
        },
      ],
    },
  ],
};
