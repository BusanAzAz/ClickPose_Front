import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageTemplate from '../components/common/PageTemplate';
import Cheese from '../asset/cheese.svg';
import Webcam from 'react-webcam';
import Photos from '../components/takePhoto/Photos';
import Button from '../components/common/Button';
import { PERSONALCOLOR, getImage, random } from '../constant/personal';
import Palat from '../asset/palette.svg';
import Check from '../asset/check.svg';

const TakePhotoPage = () => {
  const [a, setA] = useState(false);
  const { image, setImage } = getImage();
  const [searchParams] = useSearchParams();
  const frame = Number(searchParams.get('frame'));
  let getRandom = 0;
  useEffect(() => {
    getRandom = random();
  }, []);

  const [personal, setPersonal] = useState('');

  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 700,
    height: 400,
    facingMode: 'user',
  };

  const onClickCapturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    imageSrc && setImage((prev) => [...prev, imageSrc] as any);
  };

  if (personal) {
    return (
      <PageTemplate>
        <Photos frame={Number(frame)} photos={image} background={personal} />
      </PageTemplate>
    );
  }

  if (a) {
    return (
      <PageTemplate>
        <Title>
          <img src={Palat} alt='Palat' /> 퍼스널 컬러에 기반한 배경 색을 추천해
          드릴게요!
        </Title>
        <div style={{ fontSize: '40px', marginTop: '30px' }}>
          배경 색으로 변경하고 싶은 색을 선택해 주세요.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '100px',
            height: 'auto',
            margin: '50px 0px',
          }}
        >
          <Photos frame={Number(frame)} photos={image} />
          <Wrapper>
            <ColorWrapper>
              {PERSONALCOLOR[getRandom].color.map((item) => (
                <ColorCard
                  key={item}
                  color={item}
                  onClick={() => setPersonal(item)}
                >
                  {item === personal && (
                    <img
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      src={Check}
                      alt='Check'
                    />
                  )}
                </ColorCard>
              ))}
            </ColorWrapper>
          </Wrapper>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate isPhoto>
      <Title>
        <img src={Cheese} alt='Cheese' />
        하나, 둘, 셋... 치즈!
      </Title>
      <div style={{ display: 'flex', gap: '30px', marginTop: '50px' }}>
        <Photos frame={Number(frame)} photos={image} />
        <Webcam
          style={{
            borderRadius: '10px',
            backgroundColor: '#D9D9D9',
          }}
          audio={false}
          width={700}
          height={400}
          ref={webcamRef}
          screenshotFormat='image/png'
          videoConstraints={videoConstraints}
        />
      </div>
      <DIV>
        <Button
          kind='dark'
          onClick={
            image.length === frame ? () => setA(true) : onClickCapturePhoto
          }
        >
          {image.length === frame ? '완료' : '촬영'}
        </Button>
      </DIV>
    </PageTemplate>
  );
};

export default TakePhotoPage;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 45px;
  font-weight: 600;
`;

const DIV = styled.div`
  display: flex;
  justify-content: center;
  width: 1240px;
  margin: 50px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 70px 0px;
  background-color: #f0f0f0;
`;

const ColorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 135px);
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.purple[100]};
  padding: 20px;
`;

const ColorCard = styled.div<{ color: string }>`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
`;
