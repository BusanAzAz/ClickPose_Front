import React from 'react';
import styled from 'styled-components';
import BgPhoto from '../../asset/BgPhoto.png';

const PageTemplate = ({
  children,
  isPhoto = false,
}: {
  children: React.ReactNode;
  isPhoto?: boolean;
}) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${isPhoto && BgPhoto})`,
        objectFit: 'contain',
      }}
    >
      {children}
    </Container>
  );
};

export default PageTemplate;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: #f0f0f0;
`;
