"use client";

import { Container } from "@/components/Container";
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
import { RxChevronLeft } from "react-icons/rx";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { ArrowIcon } from "@/components/ArrowIcon";
import { formSchema } from "@/validation/formSchema";

type ResultProps = {
  name: string | null;
  email: string | null;
  phone: string | null;
};

export function Result(props: ResultProps) {
  const { success } = formSchema.safeParse(props);

  return (
    <S.Wrapper>
      <Container>
        <Image
          src="/illustration.png"
          width={455}
          height={335}
          alt="Imagem cartoom de um homem criando um quadro de pintura, fazendo uma analogia à criação de um cartão de visita"
          priority
        />
        {success ? (
          <S.Result>
            <Link href="/">
              <RxChevronLeft />
              <span>Gerar outro cartão</span>
            </Link>

            <S.Card>
              <Image
                src="/short-logo.png"
                width={70}
                height={60}
                alt="Logo secundária da Resultados Digitais"
              />
              <S.Divider />
              <ul>
                <Text as="li" color="black" size="large">
                  {props.name}
                </Text>
                <Text as="li" color="black" size="large">
                  {props.email}
                </Text>
                <Text as="li" color="black" size="large">
                  {props.phone}
                </Text>
              </ul>
            </S.Card>

            <Button
              icon={<ArrowIcon size={24} direction="down" />}
              iconPosition="left"
              disabled
            >
              Baixar Cartão
            </Button>

            <Link href="https://app.rdstation.com.br/signup" target="_blank">
              <span>Fazer um teste grátis no RD Station Marketing</span>
              <ArrowIcon size={24} />
            </Link>
          </S.Result>
        ) : (
          <S.Error>
            <Text size="large">
              Ops... ocorreu um erro durante o processamento do cartão.
            </Text>
          </S.Error>
        )}
      </Container>
    </S.Wrapper>
  );
}
