import styled from 'styled-components';
import PageTemplate from '../components/common/PageTemplate';
import SelectModeCard from '../components/selectMode';

const SelectModePage = () => {
  return (
    <PageTemplate>
      <Title>
        <strong>촬영 모드</strong>를 선택해 주세요.
      </Title>
      <SelectModeCard marginTop={'100px'} mode={'one'} />
      <SelectModeCard marginTop={'48px'} mode={'more'} />
    </PageTemplate>
  );
};

export default SelectModePage;

const Title = styled.div`
  font-size: 48px;
`;
