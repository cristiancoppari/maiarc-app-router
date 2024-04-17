"use client";

import type { ContactFormData } from "@/types/forms";

import { useState, createContext, PropsWithChildren, useContext } from "react";

type FormContextProviderProps = {
  initialValue: ContactFormData;
};

export const FormContext = createContext<ContactFormData | null>(null);

export default function FormContextProvider({ children, initialValue }: PropsWithChildren<FormContextProviderProps>) {
  const [formContentData] = useState(() => initialValue);

  const { form, messages } = formContentData;

  return <FormContext.Provider value={{ form, messages }}>{children}</FormContext.Provider>;
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Form context is not defined");
  }

  return context;
}
