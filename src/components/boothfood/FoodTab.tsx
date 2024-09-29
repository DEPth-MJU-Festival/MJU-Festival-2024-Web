import { FoodItemList, NoticeText } from '@constants/boothfood';
import NoticeField from '../common/NoticeField';
import ListItem from '../common/ListItem';

const FoodTab = () => {
  return (
    <div style={{ marginTop: 30 }}>
      {NoticeText.map((data, index) => {
        return <NoticeField key={index} data={data} />;
      })}
      {FoodItemList.map((data, index) => {
        return <ListItem key={index} data={data} />;
      })}
      <div
        style={{
          height: '60px',
          borderTop: '1.5px solid var(--PastelBlue)',
          margin: '0 16px',
        }}
      ></div>
    </div>
  );
};

export default FoodTab;
