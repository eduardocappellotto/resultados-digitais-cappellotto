import { darkerGrotesque, nunito, redHatDisplay } from "@/styles/fonts";
import * as S from "./styles";

export type HeaderTextProps = {
  color?: "white" | "dark";
  size?: "small" | "medium" | "large";
  font?: "nunito" | "redHat" | "dark";
  as?: React.ElementType;
  align?: "left" | "center";
  children: React.ReactNode;
};

export function HeaderText({
  color = "white",
  size = "large",
  font = "nunito",
  align = "left",
  children,
  as,
}: HeaderTextProps) {
  const fontFamily = {
    nunito: nunito.className,
    redHat: redHatDisplay.className,
    dark: darkerGrotesque.className,
  };

  return (
    <S.Wrapper
      as={as}
      $font={font}
      $size={size}
      $color={color}
      $align={align}
      className={fontFamily[font]}
    >
      {children}
    </S.Wrapper>
  );
}
