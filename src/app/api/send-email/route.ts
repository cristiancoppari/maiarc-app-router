import { NextRequest } from "next/server";
import { Resend } from "resend";

import EmailTemplate from "@/template/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const parsedRequest = await request.json();

  if (!process.env.MAIL_TO) throw new Error("MAIL_TO is not defined");

  try {
    const { data, error } = await resend.emails.send({
      from: "maiarc@resend.dev",
      // to: process.env.MAIL_TO,
      to: "cristian.coppari@gmail.com",
      subject: "Maiarc Concierge Agency - Nuevo mensaje de contacto 📬",
      react: EmailTemplate({
        data: parsedRequest,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
