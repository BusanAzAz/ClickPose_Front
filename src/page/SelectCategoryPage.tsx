import styled from 'styled-components';
import PageTemplate from '../components/common/PageTemplate';
import ThinkCloud from '../asset/think-cloud.svg';
import Tag from '../components/selectTag/Tag';
import { Link } from 'react-router-dom';
import { CategoryDummy } from '../constant/type';

const SelectCategoryPage = () => {
  return (
    <PageTemplate>
      <Title>
        <img src={ThinkCloud} alt='think-cloud' />
        오늘의 사진은 어떤 분위기인가요?
      </Title>
      <DIV>
        <CategoryBox>
          {CategoryDummy.map((category) => (
            <Link to='/select-frame'>
              <Tag key={category.id} item={category.title} />
            </Link>
          ))}
        </CategoryBox>
      </DIV>
    </PageTemplate>
  );
};

export default SelectCategoryPage;

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

const CategoryBox = styled.div`
  display: flex;
  width: fit-content;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 34px;
`;
