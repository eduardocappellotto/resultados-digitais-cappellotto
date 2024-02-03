import { InputHTMLAttributes, forwardRef } from "react";

import * as S from "./styles";

export type TextFieldProps = {
  label?: string;
  id?: string;
  error?: string;
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, id = "", error, disabled = false, ...props }, ref) => {
    return (
      <S.Wrapper $error={!!error} $disabled={!!disabled}>
        {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.Input type="text" disabled={disabled} id={id} ref={ref} {...props} />
        {!!error && <S.ErrorText>{error}</S.ErrorText>}
      </S.Wrapper>
    );
  }
);
