import { PropsWithChildren } from 'react';

interface IButtonProps extends PropsWithChildren {
  onClick: () => void;
}

const Button: React.FunctionComponent<IButtonProps> = ({ onClick, children }: IButtonProps) => {
  return (
    <button data-testid="search_button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
