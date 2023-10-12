import styled from 'styled-components';
import Logo from '../asset/logo.svg';
import Face from '../asset/face.svg';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <Conainer>
        <LogoImg src={Logo} />
      </Conainer>
      <Conainer>
        <DescriptionWrapper>
          <DescriptionTitle>
            <img src={Face} alt='Face' /> 찰칵, 치즈!
          </DescriptionTitle>
          <DescriptionBody>
            우리는 모두 각자에게 어울리는 <strong>퍼스널 컬러</strong>가 있어요.
            <br />
            나를 화사하고 생기있게 보여 주는 색이 있는 반면,
            <br />
            그 반대가 되는 색도 있어요.
            <br />
            <br />
            <strong>찰칵치즈</strong>는 얼굴 사진 <strong>‘찰칵’</strong> 찍어
            퍼스널 컬러를 진단하고,
            <br />
            포토 부스의 배경을 퍼스널 컬러에 맞게 변경해요.
            <br />
            <strong>찰칵치즈</strong>와 함께 더 예쁜 사진을 찍어 봐요!
          </DescriptionBody>
          <ButtonWrapper>
            <Link to='/select-mode'>
              <Button kind='dark'>사용하러 가기</Button>
            </Link>
          </ButtonWrapper>
        </DescriptionWrapper>
      </Conainer>
    </>
  );
};

export default LandingPage;

const Conainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple[600]};
  padding: 100px;
`;

const LogoImg = styled.img`
  position: relative;
  top: -50px;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  min-width: 1000px;
  height: 650px;
  background-color: #393848;
  padding: 96px 84px;
`;

const DescriptionTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 48px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[50]};
  &::after {
    content: '';
    position: absolute;
    left: 70px;
    bottom: 0;
    width: 220px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.gray[50]};
    opacity: 0.5;
  }
`;

const DescriptionBody = styled.p`
  color: ${({ theme }) => theme.colors.gray[50]};
  font-size: 30px;
  font-weight: 500;
  margin-top: 60px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 50px;
`;
