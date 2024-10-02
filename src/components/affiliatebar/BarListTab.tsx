import ListItem from '../common/ListItem';
import { AffiliateBarList, NoticeText } from '@/constants/affiliatebar';
import NoticeTextField from '../common/NoticeTextField';
import React from 'react';

const BarListTab = ({
  setSelectedId,
  setIsDetail,
  preloadImages,
}: {
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  setIsDetail: React.Dispatch<React.SetStateAction<boolean>>;
  preloadImages: string[];
}) => {
  return (
    <>
      <NoticeTextField data={NoticeText} />
      {AffiliateBarList.map((data, index) => {
        return (
          <ListItem
            key={index}
            data={data}
            onClick={() => {
              setSelectedId(data.id);
              setIsDetail(true);
            }}
            preloadImage={preloadImages[index]}
          />
        );
      })}
      <div
        style={{
          height: '60px',
          borderTop: '1.5px solid var(--PastelBlue)',
          margin: '0 16px',
        }}
      ></div>
    </>
  );
};

export default BarListTab;
