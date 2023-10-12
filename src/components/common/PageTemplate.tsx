import React from 'react';
import styled from 'styled-components';

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default PageTemplate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;
