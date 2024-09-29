import { FoodItemList, GuideText } from '@/constants/boothfood';
import * as S from '@styles/boothfood/FoodTabStyle';
import NoticeField from '../common/NoticeField';
import ListItem from '../common/ListItem';

const FoodTab = () => {
  return (
    <S.Container>
      {GuideText.map((data, index) => {
        return <NoticeField key={index} data={data} />;
      })}
      {FoodItemList.map((data, index) => {
        return (
          <S.ItemWrap key={index}>
            <ListItem data={data} />
          </S.ItemWrap>
        );
      })}
      <div
        style={{
          height: '60px',
          borderTop: '1.5px solid var(--PastelBlue)',
          margin: '0 16px',
        }}
      ></div>
    </S.Container>
  );
};

export default FoodTab;
