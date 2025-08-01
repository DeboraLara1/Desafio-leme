import React, { ReactNode } from 'react';
import {
  ContainerWrapper,
  PageContainer,
  ContentArea,
  Section,
  SectionTitle
} from './styles';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

interface SectionProps {
  children: ReactNode;
  title?: string;
  icon?: string;
  [key: string]: any;
}



const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <ContainerWrapper className={className} {...props}>
      {children}
    </ContainerWrapper>
  );
};

Container.Page = ({ children, ...props }: ContainerProps) => (
  <PageContainer {...props}>
    {children}
  </PageContainer>
);

Container.Content = ({ children, ...props }: ContainerProps) => (
  <ContentArea {...props}>
    {children}
  </ContentArea>
);

Container.Section = ({ children, title, icon, ...props }: SectionProps) => (
  <Section {...props}>
    {title && (
      <SectionTitle>
        {icon && <i className={icon} />}
        {title}
      </SectionTitle>
    )}
    {children}
  </Section>
);



export default Container; 