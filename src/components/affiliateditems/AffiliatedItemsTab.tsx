import { forwardRef, useState } from 'react';
import TabBar from '../common/TapBar';
import AffiliatedItemTab from './AffiliatedItemTab';
import BrandBoothTab from './BrandBoothTab';
import NoticeTextField from '../common/NoticeTextField';

const AffiliatedItemsTab = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div ref={ref}>
      <TabBar
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        tabTitles={['제휴 물품', '브랜드 부스']}
        topContent={
          <div style={{ margin: '30px 0' }}>
            <NoticeTextField
              data={{
                title: selectedId === 0 ? '제휴 물품' : '브랜드 부스',
                description:
                  '수령 장소를 클릭하여 상세정보를 확인하세요.\n모든 제휴 물품은 선착순으로 증정되며,\n소진 시 마감될 수 있습니다.',
              }}
            />
          </div>
        }
        tabContents={[<AffiliatedItemTab />, <BrandBoothTab />]}
      />
    </div>
  );
});

export default AffiliatedItemsTab;
