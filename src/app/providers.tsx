"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";
import { FormDataProvider } from "@/templates/context/FormDataContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <FormDataProvider>
        <GlobalStyles />
        {children}
      </FormDataProvider>
    </ThemeProvider>
  );
}
