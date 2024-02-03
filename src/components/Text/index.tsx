import * as S from "./styles";

export type TextProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  color?: "black" | "dark" | "white";
  size?: "small" | "medium" | "large";
  weight?: "regular" | "bold";
};

export function Text({
  children,
  as,
  color = "white",
  size = "small",
  weight = "regular",
}: TextProps) {
  return (
    <S.Wrapper as={as} $color={color} $size={size} $weight={weight}>
      {children}
    </S.Wrapper>
  );
}
