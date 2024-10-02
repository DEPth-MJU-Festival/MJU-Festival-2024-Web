import { forwardRef, useEffect, useState } from 'react';
import BarDetailTab from './BarDetailTab';
import BarListTab from './BarListTab';
import { AffiliateBarList } from '@/constants/affiliatebar';

const AffiliateBarTab = forwardRef<HTMLDivElement>((_, ref) => {
  const [isDetail, setIsDetail] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    const preloadImages = [...AffiliateBarList.map(item => item.bigImg)];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div style={{ marginTop: 30 }} ref={ref}>
      {isDetail ? (
        <BarDetailTab selectedId={selectedId} setSelectedId={setSelectedId} />
      ) : (
        <BarListTab setSelectedId={setSelectedId} setIsDetail={setIsDetail} />
      )}
    </div>
  );
});

export default AffiliateBarTab;
