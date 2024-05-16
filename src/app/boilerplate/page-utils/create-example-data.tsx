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
