"use client";

import { Home } from "@/templates/Home";
import { FormDataProvider } from "@/templates/Home/context/FormDataContext";

export default function HomePage() {
  return (
    <FormDataProvider>
      <Home />
    </FormDataProvider>
  );
}
