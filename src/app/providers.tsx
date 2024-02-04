"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
