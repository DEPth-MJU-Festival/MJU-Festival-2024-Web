import { forwardRef, useState } from 'react';
import BarDetailTab from './BarDetailTab';
import BarListTab from './BarListTab';

const AffiliateBarTab = forwardRef<HTMLDivElement>((_, ref) => {
  const [isDetail, setIsDetail] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

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
