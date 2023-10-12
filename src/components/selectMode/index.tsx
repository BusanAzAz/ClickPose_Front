import styled from 'styled-components';
import { SELECT_MODE } from '../../constant/selctMode';
import { Link } from 'react-router-dom';

interface ISelectModeCardProps {
  mode: 'one' | 'more';
  marginTop?: string;
}

const SelectModeCard = ({ mode, marginTop }: ISelectModeCardProps) => {
  return (
    <Link to={SELECT_MODE[mode].url}>
      <CardWrapper style={{ marginTop }}>
        <img src={SELECT_MODE[mode].img} />
        <DIV>
          <CardTitle>
            <strong>{SELECT_MODE[mode].person}</strong>이에요,
            <strong>{SELECT_MODE[mode].mode}</strong> 모드
          </CardTitle>
          <CardInfo>
            {SELECT_MODE[mode].firstLine} <br /> {SELECT_MODE[mode].secondLine}
          </CardInfo>
        </DIV>
      </CardWrapper>
    </Link>
  );
};

export default SelectModeCard;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 1000px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.purple[100]};
  border-radius: 20px;
  padding-left: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple[200]};
  }
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CardTitle = styled.div`
  color: black;
  font-size: 42px;
`;

const CardInfo = styled.div`
  font-size: 30px;
  font-weight: 400;
`;
