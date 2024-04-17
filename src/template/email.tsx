import { type FC } from "react";

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
}) => (
  <div>
    <h1>Nuevo contacto:</h1>
    <p>Nombre: ${name}</p>
    <p>Email: ${mail}</p>
    <p>Teléfono: ${phone}</p>
    <p>Mensaje: ${message}</p>${service ? `<p>Consulta por: ${service}</p>` : ""}
    <p>Fecha de entrada: ${dateStart ?? ""}</p>
    <p>Fecha de salida: ${dateEnd ?? ""}</p>
    <p>Destino: ${destination ?? ""}</p>
  </div>
);

export default EmailTemplate;
