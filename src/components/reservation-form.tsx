import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button as Btn } from "@/components/buttons/buttons";
import DatePicker from "@/components/date-picker";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData } from "@/types/forms";

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
  dateStart: z
    .date({
      required_error: "Tienes que ingresar una fecha",
    })
    .optional(),
  dateEnd: z
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
  service: z.string({
    required_error: "Tienes que ingresar un servicio",
  }),
  destination: z.string({
    required_error: "Tienes que ingresar un destino",
  }),
});

type ReservationFormProps = {
  name: string;
  destination: string;
  data: ContactFormData;
};

export default function ReservationForm({ name, destination, data }: ReservationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      prefix: "",
      service: name,
      destination: destination,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.promise(
      fetch(process.env.NEXT_PUBLIC_SEND_MAIL_URL, {
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
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{data.form.name.label}</FormLabel>
              <FormControl>
                <Input placeholder={data.form.name.placeholder} {...field} />
              </FormControl>
              {/* <FormMessage /> */}
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
              {/* <FormMessage /> */}
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
                {/* <FormMessage /> */}
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
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="dateStart"
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
            name="dateEnd"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel>{data.form.dateEnd.label}</FormLabel>
                <FormControl>
                  <DatePicker field={field} />
                </FormControl>
                {/* <FormMessage /> */}
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
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />

        <Btn type="submit" text={data.form.submit} classes="block mx-auto" />
      </form>
    </Form>
  );
}
