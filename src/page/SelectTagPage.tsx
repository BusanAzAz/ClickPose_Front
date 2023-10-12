import styled from 'styled-components';
import Cloud from '../asset/cloud.svg';
import PageTemplate from '../components/common/PageTemplate';

const SelectTagPage = () => {
  return (
    <PageTemplate>
      <Title>
        <img src={Cloud} alt='Cloud' /> 오늘의 사진은
        <strong>어떤 분위기</strong>인가요?
      </Title>
      <TagWrapper></TagWrapper>
    </PageTemplate>
  );
};

export default SelectTagPage;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 50px;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TagLine = styled.div`
  display: flex;
  align-items: center;
  gap: ;
`;
