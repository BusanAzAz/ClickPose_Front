import { useState } from 'react';
import styled from 'styled-components';
import PageTemplate from '../components/common/PageTemplate';
import Frame from '../asset/frame.svg';
import TwoFrame from '../asset/frameType/two.svg';
import FourFrame from '../asset/frameType/four.svg';
import SixFrame from '../asset/frameType/six.svg';
import CheckFrame from '../asset/frameType/CheckFrame';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const SelectFramePage = () => {
  const [checkedFrame, setCheckedFrame] = useState(0);
  return (
    <PageTemplate>
      <Title style={{ fontSize: '56px' }}>
        <img src={Frame} alt='Frame' />
        프레임 컷 수를 선택해 주세요.
      </Title>
      <CardWrppaer>
        {checkedFrame === 2 ? (
          <CheckFrame />
        ) : (
          <Card
            src={TwoFrame}
            alt='TwoFrame'
            onClick={() => setCheckedFrame(2)}
          />
        )}
        {checkedFrame === 4 ? (
          <CheckFrame />
        ) : (
          <Card
            src={FourFrame}
            alt='FourFrame'
            onClick={() => setCheckedFrame(4)}
          />
        )}
        {checkedFrame === 6 ? (
          <CheckFrame />
        ) : (
          <Card
            src={SixFrame}
            alt='SixFrame'
            onClick={() => setCheckedFrame(6)}
          />
        )}
      </CardWrppaer>
      <DIV>
        {checkedFrame !== 0 && (
          <Link to={`/photo?frame=${checkedFrame}`}>
            <Button kind='dark'>다음</Button>
          </Link>
        )}
      </DIV>
    </PageTemplate>
  );
};

export default SelectFramePage;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 56px;
`;

const CardWrppaer = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  margin-top: 80px;
`;

const Card = styled.img`
  cursor: pointer;
  width: 340px;
  height: 450px;
`;

const DIV = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1220px;
  height: 100px;
  margin: 50px 0px;
`;
