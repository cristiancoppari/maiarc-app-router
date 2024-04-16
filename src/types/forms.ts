type Field = {
  label: string;
  placeholder: string;
};

type FormMessages = {
  success: string;
  error: string;
  sending: string;
};

type FormFields = {
  name: Field;
  prefix: Field;
  phone: Field;
  email: Field;
  destinations: Field;
  message: Field;
  dateStart: Field;
  dateEnd: Field;
  submit: string;
};

export type ContactFormData = {
  form: FormFields;
  messages: FormMessages;
};
