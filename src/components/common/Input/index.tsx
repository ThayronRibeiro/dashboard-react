import { InputField } from "styles/Form";
import { useForm } from "react-hook-form";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: string;
  label: string;
  onChange?: (value) => void;
  required?: boolean;
  errorsInput?: any;
  errorIdentifier?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  onChange,
  required,
  errorsInput,
  ...props
}: InputProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <InputField
        type={type}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        errors={errorsInput}
      />
      {/* {errorsInput && !`${errorIdentifier}` && <p>Campo obrigatório!</p>} */}
    </div>
  );
};
