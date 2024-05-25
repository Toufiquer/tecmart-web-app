/*
|-----------------------------------------
| setting up ProfileInfo for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  gender: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  emailAddress: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  dateOfBirthDate: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  dateOfBirthMonth: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  dateOfBirthYear: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  alternativePhone: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  facebook: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  instagram: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
  twitter: z.string().min(2, {
    message: "use at least 2 characters.",
  }),
});
const dateDate: number[] = [];
for (let i = 1; i <= 31; i += 1) {
  dateDate.push(i);
}
const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const years: number[] = [];
for (let i = 1945; i <= 2012; i += 1) {
  years.push(i);
}
const ProfileInfo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      gender: "",
      emailAddress: "",
      dateOfBirthDate: "",
      dateOfBirthMonth: "",
      dateOfBirthYear: "",
      phone: "",
      alternativePhone: "",
      facebook: "",
      instagram: "",
      twitter: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <main className="mt-4 w-full px-4">
              <div className="flex w-full flex-col gap-4">
                <div className="flex w-full gap-4">
                  <div className="flex w-full flex-col gap-2 ">
                    <FormLabel>
                      <h2 className="font-semibold">Full Name</h2>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Full name" />
                    </FormControl>
                  </div>
                  <div className="flex w-full flex-col gap-2 ">
                    <FormLabel>
                      <h2 className="font-semibold">Gender</h2>
                    </FormLabel>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="nonBinary">Non-binary</SelectItem>
                        <SelectItem value="preferNotToSay">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex w-full gap-4 ">
                  <div className="flex w-full flex-col gap-2 ">
                    <FormLabel>
                      <h2 className="font-semibold">Email</h2>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Email" />
                    </FormControl>
                  </div>
                  <div className="flex w-full flex-col gap-2 ">
                    <FormLabel>
                      <h2 className="font-semibold">Date of birth</h2>
                    </FormLabel>
                    <div className="flex w-full gap-2 ">
                      <Select>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                          {dateDate.map((curr) => (
                            <SelectItem key={curr} value={curr.toString()}>
                              {curr}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="January" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((curr) => (
                            <SelectItem key={curr} value={curr}>
                              {curr}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="2010" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((curr) => (
                            <SelectItem key={curr} value={curr.toString()}>
                              {curr}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex w-full gap-4">
                  <div className="flex w-full flex-col gap-2 ">
                    <FormLabel>
                      <h2 className="font-semibold">Phone</h2>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="+0123456789" />
                    </FormControl>
                  </div>
                  <div className="flex w-full flex-col gap-2 ">
                    <div className="flex w-full flex-col gap-2 ">
                      <FormLabel>
                        <h2 className="font-semibold">Alternative Phone</h2>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="+0123456789" />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="flex w-full gap-4">
                  <div className="flex w-full flex-col gap-2 ">
                    <FormLabel>
                      <h2 className="font-semibold">Facebook</h2>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Facebook" />
                    </FormControl>
                  </div>
                  <div className="flex w-full flex-col gap-2 ">
                    <FormLabel>
                      <h2 className="font-semibold">Instagram</h2>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Instagram" />
                    </FormControl>
                  </div>
                  <div className="flex w-full flex-col gap-2 ">
                    <FormLabel>
                      <h2 className="font-semibold">Twitter</h2>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Twitter" />
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-4">
                <Button
                  type="submit"
                  variant="default"
                  className="border border-blue-500 bg-blue-500 text-white hover:bg-blue-50 hover:text-blue-600"
                >
                  Save changes
                </Button>
              </div>
            </main>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};
export default ProfileInfo;
