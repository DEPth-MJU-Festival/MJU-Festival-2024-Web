import { forwardRef, useEffect, useState } from 'react';
import TabBar from '../common/TapBar';
import AffiliatedItemTab from './AffiliatedItemTab';
import BrandBoothTab from './BrandBoothTab';
import NoticeTextField from '../common/NoticeTextField';
import MapImg from '@images/affiliateditems/Map.png';

const AffiliatedItemsTab = forwardRef<
  HTMLDivElement,
  { preloadImages: string[]; preloadLogoImages: string[] }
>(({ preloadImages, preloadLogoImages }, ref) => {
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    const preloadImages = [MapImg];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
        tabContents={[
          <AffiliatedItemTab
            preloadImages={preloadImages}
            preloadLogoImages={preloadLogoImages}
          />,
          <BrandBoothTab />,
        ]}
      />
    </div>
  );
});

export default AffiliatedItemsTab;
