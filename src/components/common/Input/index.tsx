import { InputField } from "styles/Form";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  label: string;
  onChange?: (value) => void;
  required?: boolean;
  register?: any;
  errorsInput?: any;
  errorIdentifier?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  onChange,
  required,
  register,
  errorsInput,
  ...props
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <InputField
          type={type}
          id={id}
          autoComplete="off"
          {...register(id)}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      {/* {errorsInput && !`${errorIdentifier}` && <p>Campo obrigatório!</p>} */}
    </div>
  );
};
