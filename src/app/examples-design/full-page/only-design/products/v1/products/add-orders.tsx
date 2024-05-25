/*
|-----------------------------------------
| setting up add Products for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AiOutlinePlus } from "react-icons/ai";

const formSchema = z.object({
  productName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.string().min(2, { message: "minimum 2 characters long." }),
  category: z.string().min(2, { message: "minimum 2 characters long." }),
  img: z.string().min(2, { message: "minimum 2 characters long." }),
  tags: z.string().min(2, { message: "minimum 2 characters long." }),
  vendor: z.string().min(2, { message: "minimum 2 characters long." }),
});
const AddProducts = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vendor: "",
      img: "",
      price: "",
      category: "",
      productName: "",
      tags: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <Dialog>
      <DialogTrigger className="flex cursor-pointer items-center gap-2 rounded border border-blue-500 bg-blue-500 px-4 py-2 text-[.8rem] text-white duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600">
        <AiOutlinePlus /> Add Product
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new Product</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] w-full rounded-md border p-4">
          <DialogDescription>
            <Form
              {...form}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="products"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="inline-block pb-2 pt-4">
                      Product Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Product Name"
                        {...field}
                        className="mb-2"
                      />
                    </FormControl>
                    <FormLabel className="inline-block pb-2 pt-4">
                      Image
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        placeholder="img"
                        {...field}
                        className="mb-2"
                      />
                    </FormControl>
                    <FormLabel className="inline-block pb-2 pt-4">
                      Price
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Price" {...field} className="mb-2" />
                    </FormControl>
                    <FormLabel className="inline-block pb-2 pt-4">
                      Category
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="category"
                        {...field}
                        className="mb-2"
                      />
                    </FormControl>
                    <FormLabel className="inline-block pb-2 pt-4">
                      Tags
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EXERCISE">EXERCISE</SelectItem>
                          <SelectItem value="DISCIPLINE">DISCIPLINE</SelectItem>
                          <SelectItem value="LIFESTYLE">LIFESTYLE</SelectItem>
                          <SelectItem value="FITNESS">FITNESS</SelectItem>
                          <SelectItem value="CLASS">CLASS</SelectItem>
                          <SelectItem value="PRO">PRO</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-2 w-full">
                Add Product
              </Button>
            </Form>
          </DialogDescription>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
export default AddProducts;
