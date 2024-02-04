"use client";

import { useFormData } from "@/templates/context/FormDataContext";
import { Result } from "@/templates/Result";

export default function ResultPage() {
  const { formData } = useFormData();
  const { name, email, phone } = formData;

  return <Result name={name} email={email} phone={phone} />;
}
