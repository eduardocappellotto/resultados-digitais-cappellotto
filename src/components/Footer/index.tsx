"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import * as S from "./styles";
import { Text } from "@/components/Text";

export function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <Link
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
        >
          Política de Privacidade
        </Link>
        <Text size="medium">
          © {new Date().getFullYear()} Resultados Digitais
        </Text>
      </Container>
    </S.Wrapper>
  );
}
