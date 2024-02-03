import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: string;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper $iconPosition={iconPosition} {...props}>
      <span>{children}</span>
      {icon}
    </S.Wrapper>
  );
}
