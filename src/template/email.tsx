import { type FC } from "react";
import { date } from "zod";

type TContactFormData = {
  name: string;
  mail: string;
  phone: string;
  message: string;
  service?: string;
  dateStart?: string;
  dateEnd?: string;
  destination?: string;
};

type EmailTemplateProps = {
  data: TContactFormData;
};

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  data: { name, mail, phone, message, service, dateStart, dateEnd, destination },
}) => {
  let dateStartParsed = "";
  let dateEndParsed = "";

  if (dateStart && dateEnd) {
    const dateFormat = new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    dateStartParsed = dateFormat.format(new Date(dateStart));
    dateEndParsed = dateFormat.format(new Date(dateEnd));
  }

  return (
    <div>
      <h2>Nuevo contacto a través de la web 📬:</h2>
      <p>Nombre: {name}</p>
      <p>Email: {mail}</p>
      <p>Teléfono: {phone}</p>
      <p>Mensaje: {message}</p>
      {service ? <p>Consulta por: {service}</p> : ""}
      <p>Fecha de entrada: {dateStartParsed ?? ""}</p>
      <p>Fecha de salida: {dateEndParsed ?? ""}</p>
      <p>Destino: {destination ?? ""}</p>
    </div>
  );
};

export default EmailTemplate;
