import styled from 'styled-components';
import Palat from '../asset/palette.svg';
import PageTemplate from '../components/common/PageTemplate';
import { getFrame, getImage, getPersonal } from '../constant/personal';
import Photos from '../components/takePhoto/Photos';

const FinalPage = () => {
  const { personal } = getPersonal();
  const { image } = getImage();
  const { frame } = getFrame();
  return (
    <PageTemplate>
      <Title>
        <img src={Palat} alt='Palat' /> 퍼스널 컬러에 기반한 배경 색을 추천해
        드릴게요!
      </Title>
      <div style={{ fontSize: '40px', marginTop: '30px' }}>
        배경 색으로 변경하고 싶은 색을 선택해 주세요.
      </div>
      <Photos frame={Number(frame)} photos={image} />
      <Wrapper>
        <ColorWrapper>
          {personal?.map((item) => (
            <ColorCard key={item} color={item} />
          ))}
        </ColorWrapper>
      </Wrapper>
    </PageTemplate>
  );
};

export default FinalPage;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 70px 0px;
`;

const PreviewImg = styled.img`
  width: 650px;
  height: 480px;
  border-radius: 10px;
  object-fit: cover;
`;
const ColorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 480px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple[100]};
`;

const HigilightText = styled.span`
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.purple[200]};
`;

const ColorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 135px);
  gap: 15px;
`;

const ColorCard = styled.div<{ color: string }>`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
`;
