import { useState, useRef } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import PageTemplate from '../components/common/PageTemplate';
import Button from '../components/common/Button';
import CristalBall from '../asset/crystalBall.svg';
import Check from '../asset/check.svg';
import ShowPersonalColor from '../components/showPersonalColor';

const PersonalColorPage = () => {
  const [getPersonalColor, setGetPersonalColor] = useState(false);

  const [photo, setPhoto] = useState<string>('');
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 950,
    height: 550,
    facingMode: 'user',
  };

  const onClickCapturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    imageSrc && setPhoto(imageSrc);
  };

  if (getPersonalColor) {
    return (
      <PageTemplate>
        <Title style={{ margin: 0 }}>
          <img src={CristalBall} alt='CristalBall' />
          진단한 <strong>결과는...</strong>
        </Title>
        <ShowPersonalColor
          url={photo}
          colorType='가을 웜톰'
          colors={['#84A7AD', '#A0B087', '#D8BC9C', '#84A7AD']}
        />
      </PageTemplate>
    );
  }

  return (
    <PageTemplate>
      <Title>
        <img src={CristalBall} alt='CristalBall' />
        나만의 <strong>퍼스널 컬러</strong>를 알아 볼까요?
      </Title>
      <Introduce>
        카메라를 향해 정면으로 선 다음, 얼굴 사진을 촬영해 주세요.
      </Introduce>
      {photo ? (
        <SuccessBox>
          <img src={Check} alt='Check' />
        </SuccessBox>
      ) : (
        <Webcam
          style={{
            margin: '30px 0px',
            borderRadius: '10px',
            backgroundColor: '#D9D9D9',
          }}
          audio={false}
          width={950}
          height={550}
          ref={webcamRef}
          screenshotFormat='image/png'
          videoConstraints={videoConstraints}
        />
      )}

      <Button
        style={{ marginBottom: '50px' }}
        kind='dark'
        onClick={photo ? () => setGetPersonalColor(true) : onClickCapturePhoto}
      >
        {photo ? '완료' : '촬영'}
      </Button>
    </PageTemplate>
  );
};

export default PersonalColorPage;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 48px;
  margin-top: 80px;
`;

const Introduce = styled.div`
  font-size: 40px;
  margin-top: 46px;
`;

const SuccessBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 950px;
  height: 550px;
  background-color: ${({ theme }) => theme.colors.purple[500]};
  margin: 30px 0px;
`;
