import { PropsWithChildren } from 'react';

interface ILinkProps extends PropsWithChildren {
  onClick: () => void;
}

const Link: React.FunctionComponent<ILinkProps> = ({ onClick, children }: ILinkProps) => {
  return (
    <a data-testid="github_link" onClick={onClick} className="read-the-docs">
      {children}
    </a>
  );
};

export default Link;
