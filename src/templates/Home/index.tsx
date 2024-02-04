"use client";

import Image from "next/image";
import { Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { HeaderText } from "@/components/HeaderText";
import Link from "next/link";

import * as S from "./styles";
import { Container } from "@/components/Container";
import { Text } from "@/components/Text";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { ArrowIcon } from "@/components/ArrowIcon";
import { useHomeController, useHomeControllerProps } from "./controller";

type HomeProps = Pick<useHomeControllerProps, "onSubmit">;

export function Home({ onSubmit }: HomeProps) {
  const {
    control,
    phoneFormat,
    handleChangePhone,
    register,
    handleSubmit,
    errors,
  } = useHomeController({
    onSubmit,
  });

  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <HeaderText font="redHat" align="center">
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
            alt="Imagem cartoom de um homem criando um quadro de pintura, fazendo a analogia à criação de um cartão de visita"
            priority
          />
          <S.Form onSubmit={handleSubmit}>
            <S.FieldsWrapper>
              <TextField
                label="Nome*"
                error={errors.name?.message}
                id="name"
                {...register("name")}
              />
              <Controller
                control={control}
                name="phone"
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <PatternFormat
                    customInput={TextField}
                    id="phone"
                    type="text"
                    label="Telefone*"
                    placeholder="(00) 0 0000-0000"
                    error={errors.phone?.message}
                    defaultValue={value}
                    onChange={(e) => handleChangePhone(e, onChange)}
                    valueIsNumericString
                    format={phoneFormat}
                    patternChar="#"
                    mask=""
                  />
                )}
              />
              <TextField
                label="E-mail*"
                id="email"
                type="email"
                placeholder="nome@email.com"
                error={errors.email?.message}
                {...register("email")}
              />
            </S.FieldsWrapper>
            <S.Warnings>
              <ul>
                <Text as="li" size="small">
                  Ao preencher o formulário, concordo * em receber comunicações
                  de acordo com meus interesses.
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
                * Você pode alterar suas permissões de comunicação a qualquer
                tempo.
              </Text>
            </S.Warnings>
            <Button type="submit" icon={<ArrowIcon size={24} />}>
              Gerar Cartão Grátis
            </Button>
          </S.Form>
        </S.Main>
      </Container>
    </S.Wrapper>
  );
}
