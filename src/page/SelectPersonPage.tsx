import { useState } from 'react';
import styled from 'styled-components';
import PageTemplate from '../components/common/PageTemplate';
import Person from '../asset/selectPerson/person.svg';
import Plus from '../asset/selectPerson/plus.svg';
import Minus from '../asset/selectPerson/minus.svg';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const SelectPersonPage = () => {
  const [count, setCount] = useState(1);
  return (
    <PageTemplate>
      <Title>
        <strong>인원 수</strong>를 선택해 주세요.
      </Title>
      <Wrapper>
        <img src={Person} alt='Person' />
        <Div>
          <img
            style={{ cursor: 'pointer', width: '116px' }}
            src={Minus}
            alt='Minus'
            onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 1))}
          />
          <span style={{ fontWeight: 600, fontSize: '100px' }}>{count}</span>
          <img
            style={{ cursor: 'pointer' }}
            src={Plus}
            alt='Plus'
            onClick={() => setCount((prev) => prev + 1)}
          />
        </Div>
        <Link to={`/personal?count=${count}`}>
          <Button kind='dark'>결정</Button>
        </Link>
      </Wrapper>
    </PageTemplate>
  );
};

export default SelectPersonPage;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

const Div = styled.div`
  display: flex;
  gap: 200px;
  margin: 30px 0px 45px;
`;
