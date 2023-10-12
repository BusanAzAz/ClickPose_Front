import styled from 'styled-components';
import { useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PageTemplate from '../components/common/PageTemplate';
import Cheese from '../asset/cheese.svg';
import Webcam from 'react-webcam';
import Photos from '../components/takePhoto/Photos';
import Button from '../components/common/Button';

const TakePhotoPage = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const frame = Number(searchParams.get('frame'));

  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 700,
    height: 400,
    facingMode: 'user',
  };

  const onClickCapturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    imageSrc && setPhotos((prev) => [...prev, imageSrc]);
  };

  return (
    <PageTemplate isPhoto>
      <Title>
        <img src={Cheese} alt='Cheese' />
        하나, 둘, 셋... 치즈!
      </Title>
      <div style={{ display: 'flex', gap: '30px', marginTop: '50px' }}>
        <Photos frame={Number(frame)} photos={photos} />
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
            photos.length === frame
              ? () => navigate('/final')
              : onClickCapturePhoto
          }
        >
          {photos.length === frame ? '완료' : '촬영'}
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
