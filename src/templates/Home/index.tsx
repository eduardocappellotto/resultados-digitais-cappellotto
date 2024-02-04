/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { HeaderText } from "@/components/HeaderText";
import { TextField } from "@/components/TextField";
import { ArrowIcon } from "@/components/ArrowIcon";
import { Button } from "@/components/Button";

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

        <S.Form>
          <S.FieldsWrapper>
            <TextField label="Nome*" id="name" type="text" />
            <TextField label="Telefone Fake" id="phone" type="text" />
            <TextField label="E-mail*" id="email" type="email" />
          </S.FieldsWrapper>
        </S.Form>
        <section>
          <ul>
            <Text as="li" size="small">
              Ao preencher o formulário, concordo * em receber comunicações de
              acordo com meus interesses.
            </Text>
            <Text as="li" size="small">
              Ao informar meus dados, eu concordo com a{" "}
              <Link
                href="https://legal.rdstation.com/pt/privacy-policy/"
                target="_blank"
              >
                Política de Privacidade
              </Link>
            </Text>
          </ul>
          <Text size="small">
            * Você pode alterar suas permissões de comunicação a qualquer tempo.
          </Text>

          <Button type="submit" icon={<ArrowIcon size={24} />}>
            Gerar Cartão Grátis
          </Button>
        </section>
      </Container>
    </S.Wrapper>
  );
}
