/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";

import * as S from "./styles";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { HeaderText } from "@/components/HeaderText";

export function Home({ onSubmit }: any) {
  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <HeaderText font="redHat" size="large">
            Gerador de Cartão de Visita
          </HeaderText>
          <Text size="large">
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no
            Instagram e demais canais digitais.
          </Text>
        </S.Header>
        <S.Main>
          <Image
            src="/illustration.png"
            width={471}
            height={347}
            alt="Homem de headphones pintando um painel com um rolo de tinta"
            priority
          />
        </S.Main>
      </Container>
    </S.Wrapper>
  );
}
