/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";

import * as S from "./styles";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";

export function Home({ onSubmit }: any) {
  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <Text size="large">Gerador de Cartão de Visita</Text>
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
          <span>Form</span>
        </S.Main>
      </Container>
    </S.Wrapper>
  );
}
