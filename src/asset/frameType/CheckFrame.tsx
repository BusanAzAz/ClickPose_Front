import styled from 'styled-components';
import Check from '../check.svg';

const CheckFrame = () => {
  return (
    <Wrapper>
      <img src={Check} alt='Check' />
    </Wrapper>
  );
};

export default CheckFrame;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 445px;
  background-color: ${({ theme }) => theme.colors.purple[600]};
  border-radius: 20px;
`;
