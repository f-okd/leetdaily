import { PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
  onClick: () => void;
  id: string;
  className?: string;
  variant?: "primary" | "secondary";
}

const Button: React.FunctionComponent<IButtonProps> = ({
  onClick,
  id,
  children,
  className = "",
  variant = "primary",
}: IButtonProps) => {
  return (
    <button
      data-testid={id}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
