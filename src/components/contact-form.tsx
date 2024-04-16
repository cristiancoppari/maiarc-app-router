"use client";

import type { ContactFormData } from "@/types/forms";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "@/components/date-picker";
import { Button } from "@/components/buttons/buttons";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Tienes que ingresar un nombre",
    })
    .min(1, {
      message: "Tienes que ingresar un nombre",
    }),
  phone: z
    .string({
      required_error: "Tienes que ingresar un teléfono",
    })
    .min(1, {
      message: "Tienes que ingresar un teléfono",
    }),
  email: z
    .string({
      required_error: "Tienes que ingresar un email",
    })
    .email({
      message: "Tienes que ingresar un email",
    }),
  message: z
    .string({
      required_error: "Tienes que ingresar un mensaje",
    })
    .min(1, {
      message: "Tienes que ingresar un mensaje",
    })
    .max(1000, {
      message: "El mensaje no puede tener más de 1000 caracteres",
    }),
  destination: z
    .string({
      required_error: "Tienes que ingresar un destino",
    })
    .min(1, {
      message: "Tienes que ingresar un destino",
    }),
  date_start: z
    .date({
      required_error: "Tienes que ingresar una fecha",
    })
    .optional(),
  date_end: z
    .date({
      required_error: "Tienes que ingresar una fecha",
    })
    .optional(),
  prefix: z
    .string({
      required_error: "Tienes que ingresar un nombre",
    })
    .min(1, {
      message: "Tienes que ingresar un nombre",
    }),
});

type ContactFormProps = {
  data: ContactFormData;
};

export default function ContactForm({ data }: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      destination: "",
      prefix: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(
      fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }),
      {
        loading: data.messages.sending,
        success: data.messages.success,
        error: data.messages.error,
      },
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="container space-y-8 text-start md:max-w-xl">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{data.form.name.label}</FormLabel>
              <FormControl>
                <Input placeholder={data.form.name.placeholder} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{data.form.email.label}</FormLabel>
              <FormControl>
                <Input placeholder={data.form.name.placeholder} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="prefix"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{data.form.prefix.label}</FormLabel>
                <FormControl>
                  <Input placeholder={data.form.prefix.label} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{data.form.phone.label}</FormLabel>
                <FormControl>
                  <Input placeholder={data.form.phone.label} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{data.form.destinations.label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={data.form.destinations.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ibiza">Ibiza</SelectItem>
                  <SelectItem value="miami">Miami</SelectItem>
                  <SelectItem value="tulum">Tulum</SelectItem>
                  <SelectItem value="punta del este">Punta del Este</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="date_start"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>{data.form.dateStart.label}</FormLabel>
                <FormControl>
                  <DatePicker field={field} />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date_end"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>{data.form.dateEnd.label}</FormLabel>
                <FormControl>
                  <DatePicker field={field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{data.form.message.label}</FormLabel>
              <FormControl>
                <Textarea placeholder={data.form.name.placeholder} {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" text={data.form.submit} classes="block mx-auto" />
      </form>
    </Form>
  );
}
