import * as S from "./styles";

export type ArrowIconProps = {
  direction?: "left" | "up" | "right" | "down";
  size?: number;
};

export function ArrowIcon({ direction = "right", size = 16 }: ArrowIconProps) {
  return (
    <S.Wrapper $direction={direction}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        fill="none"
        viewBox="0 0 25 24"
        role="img"
        aria-label="Arrow icon"
      >
        <path
          fill="currentColor"
          d="m16.385 8.143 3.974 4.013a.49.49 0 0 1 0 .688l-3.974 4.013a.48.48 0 0 1-.822-.344v-2.878H4.982a.484.484 0 0 1-.482-.487v-1.296c0-.269.216-.487.482-.487h10.581V8.487a.48.48 0 0 1 .822-.344Z"
        />
      </svg>
    </S.Wrapper>
  );
}
