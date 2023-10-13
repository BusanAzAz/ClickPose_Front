import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import Webcam from 'react-webcam';
import PageTemplate from '../components/common/PageTemplate';
import Button from '../components/common/Button';
import ShowPersonalColor from '../components/showPersonalColor';
import Check from '../asset/check.svg';
import CristalBall from '../asset/personalColor/crystalBall.svg';
import Left from '../asset/personalColor/left.svg';
import Right from '../asset/personalColor/right.svg';
import { PostImage } from '../api/imgae';
import { PERSONALCOLOR, getPersonal, random } from '../constant/personal';

const PersonalColorPage = () => {
  const [getPersonalColor, setGetPersonalColor] = useState(false);
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count'));
  const [index, setIndex] = useState(0);
  const [photo, setPhoto] = useState<string[]>([]);
  const webcamRef = useRef<Webcam>(null);
  const { setPersonal } = getPersonal();

  const { mutate } = PostImage();

  const videoConstraints = {
    width: 950,
    height: 550,
    facingMode: 'user',
  };

  const getRandom = random();

  const onClickCapturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    imageSrc && setPhoto((prev) => [...prev, imageSrc]);
  };

  const onClick = () => {
    setGetPersonalColor(true);
    setPersonal(PERSONALCOLOR[getRandom].color as any);
    mutate(photo)
  };

  if (getPersonalColor) {
    return (
      <PageTemplate>
        {count > 1 && index !== 0 && (
          <Img
            style={{ left: '50px' }}
            src={Left}
            alt='Left'
            onClick={() => setIndex((prev) => prev - 1)}
          />
        )}
        <Title>
          <img src={CristalBall} alt='CristalBall' />
          진단한 <strong>결과는...</strong>
        </Title>
        <ShowPersonalColor
          url={photo[index] as string}
          colorType={PERSONALCOLOR[getRandom].title}
          colors={PERSONALCOLOR[getRandom].color}
        />
        {count > 1 && index !== photo.length - 1 && (
          <Img
            style={{ right: '50px' }}
            src={Right}
            alt='Right'
            onClick={() => setIndex((prev) => prev + 1)}
          />
        )}
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
      {photo.length === count ? (
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
        onClick={photo.length === count ? onClick : onClickCapturePhoto}
      >
        {photo.length === count ? '완료' : '촬영'}
      </Button>
      {count > 1 && (
        <Count>
          {photo.length}/{count}
        </Count>
      )}
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

const Count = styled.div`
  position: absolute;
  left: 30px;
  font-size: 60px;
  font-weight: 600;
`;

const Img = styled.img`
  cursor: pointer;
  position: absolute;
`;
