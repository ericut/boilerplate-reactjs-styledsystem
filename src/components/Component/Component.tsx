import { ReactNode } from 'react';
import { ComponentContainer } from './Component.styles';

type IProps = {
  children?: ReactNode;
  text?: string;
};

export function Component({ children, text = 'This is the default title' }: IProps) {
  return (
    <ComponentContainer>
      <div className="subContainer">{text}</div>
      {children}
    </ComponentContainer>
  );
}
