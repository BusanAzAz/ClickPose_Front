import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

interface IShowPersonalColor {
  url: string;
  colorType: string;
  colors: string[];
}

const ShowPersonalColor = ({ url, colorType, colors }: IShowPersonalColor) => {
  return (
    <div style={{ position: 'relative', marginBottom: '50px' }}>
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
      <Link to='/select-frame'>
        <Button
          style={{ position: 'absolute', right: 0, bottom: '-40px' }}
          kind='dark'
        >
          촬영하러 가기
        </Button>
      </Link>
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
