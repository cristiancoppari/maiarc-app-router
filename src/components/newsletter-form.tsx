"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Tienes que ingresar un email",
    })
    .email({
      message: "Tienes que ingresar un email",
    }),
});

export default function NewsletterForm({ content }: { content: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(
      fetch("https://lobster-app-ywbip.ondigitalocean.app/api/newsletters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            lead: values.email,
          },
        }),
      }),
      {
        loading: "Enviando mail...",
        success: "Tu mensaje ha sido enviado",
        error: "Hubo un error al enviar tu mensaje",
      },
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center justify-center gap-4 space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full rounded-full text-zinc-100">
              <FormControl>
                <Input className="rounded-full" placeholder={"juan@gmail.com"} {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />

        <Button variant="outline" className="!mt-0 rounded-full uppercase">
          {content}
        </Button>
      </form>
    </Form>
  );
}
