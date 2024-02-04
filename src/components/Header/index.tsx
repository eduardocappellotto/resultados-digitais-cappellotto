"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import * as S from "./styles";
import { darkerGrotesque } from "@/styles/fonts";

export function Header() {
  return (
    <S.Wrapper>
      <Container>
        <Logo />
        <nav>
          <Link className={darkerGrotesque.className} href="/">
            Gerador de Cartão de Visita
          </Link>
        </nav>
      </Container>
    </S.Wrapper>
  );
}
