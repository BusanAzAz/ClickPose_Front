import styled from 'styled-components';
import Button from '../common/Button';

interface IShowPersonalColor {
  url: string;
  colorType: string;
  colors: string[];
}

const ShowPersonalColor = ({ url, colorType, colors }: IShowPersonalColor) => {
  return (
    <div style={{ position: 'relative' }}>
      <Wrapper>
        <PreviewImg src={url} alt='photoImage' />
        <ColorCardContainer>
          <div style={{ fontSize: '30px' }}>
            <HigilightText>{colorType}</HigilightText>이에요.
          </div>
          <div style={{ fontSize: '24px', margin: '34px 0 20px' }}>
            어울리는 색들에는 이런 색이 있어요.
          </div>
          <ColorWrapper>
            {colors.map((item) => (
              <ColorCard key={item} color={item} />
            ))}
          </ColorWrapper>
        </ColorCardContainer>
      </Wrapper>
      <Button
        style={{ position: 'absolute', right: 0, bottom: '-40px' }}
        kind='dark'
      >
        촬영하러 가기
      </Button>
    </div>
  );
};

export default ShowPersonalColor;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 70px 0px;
`;

const PreviewImg = styled.img`
  width: 700px;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
`;
const ColorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 500px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple[100]};
`;

const HigilightText = styled.span`
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.purple[200]};
`;

const ColorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 140px);
  gap: 20px;
`;

const ColorCard = styled.div<{ color: string }>`
  width: 140px;
  height: 140px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
`;
