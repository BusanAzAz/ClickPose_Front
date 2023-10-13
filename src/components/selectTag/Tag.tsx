import styled from 'styled-components';

const Tag = ({ item }: { item: string }) => {
  return <Wrapper>#{item}</Wrapper>;
};

export default Tag;

const Wrapper = styled.div`
  font-size: 40px;
  border-radius: 50px;
  padding: 24px 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple[100]};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.purple[50]};
    background-color: ${({ theme }) => theme.colors.purple[400]};
  }
`;
