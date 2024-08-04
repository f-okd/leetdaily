import { PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
  onClick: () => void;
  id: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  onClick,
  id,
  children,
}: IButtonProps) => {
  return (
    <button data-testid={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
