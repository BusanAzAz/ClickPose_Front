import styled from 'styled-components';

type NumberType = 2 | 4 | 6;

interface IPhotosProps {
  frame: number;
  photos: string[];
  background?: string;
}

const Photos = ({ frame, photos, background }: IPhotosProps) => {
  const Generator = {
    2: {
      width: 440,
      height: 300,
    },
    4: {
      width: 220,
      height: 300,
    },
    6: {
      width: 220,
      height: 130,
    },
  };
  if (background) {
    return (
      <DIV style={{ backgroundColor: background }}>
        <Back frame={frame === 2}>
          {photos.map((item) => (
            <Img
              src={item}
              alt={item}
              width={Generator[frame as NumberType].width}
              height={Generator[frame as NumberType].height}
            />
          ))}
        </Back>
      </DIV>
    );
  }

  return (
    <Wrapper frame={frame === 2}>
      {photos.map((item) => (
        <Img
          src={item}
          alt={item}
          width={Generator[frame as NumberType].width}
          height={Generator[frame as NumberType].height}
        />
      ))}
    </Wrapper>
  );
};

export default Photos;

const DIV = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  height: 700px;
`;

const Back = styled.div<{ frame: boolean }>`
  position: relative;
  top: 150px;
  display: grid;
  grid-template-columns: ${({ frame }) => (frame ? '1fr' : '1fr 1fr')};
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
`;

const Wrapper = styled.div<{ frame: boolean }>`
  display: grid;
  grid-template-columns: ${({ frame }) => (frame ? '1fr' : '1fr 1fr')};
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  width: 470px;
  height: 530px;
`;

const Img = styled.img<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  object-fit: cover;
`;
