"use client";

import * as S from "./styles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type DefaultProps = {
  children: React.ReactNode;
};

export function Default({ children }: DefaultProps) {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  );
}
