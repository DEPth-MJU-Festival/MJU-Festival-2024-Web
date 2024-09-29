import { forwardRef } from 'react';
import ListItem from '../common/ListItem';
import NoticeField from '../common/NoticeField';
import { FleaMarketList, NoticeText } from '@constants/fleamarket';

const FleaMarketTab = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div style={{ marginTop: 30 }} ref={ref}>
      <NoticeField data={NoticeText} />
      {FleaMarketList.map((data, index) => {
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
});

export default FleaMarketTab;
