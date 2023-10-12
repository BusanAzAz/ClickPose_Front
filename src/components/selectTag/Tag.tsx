import styled from 'styled-components';

const Tag = ({ item }: { item: string }) => {
  return <Wrapper>#{item}</Wrapper>;
};

export default Tag;

const Wrapper = styled.div`
  font-size: 40px;
  border-radius: 50%;
  padding: 24px 50px;
  background-color: ${({ theme }) => theme.colors.purple[100]};
`;
