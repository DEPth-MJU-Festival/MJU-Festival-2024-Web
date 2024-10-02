import { forwardRef, useEffect, useState } from 'react';
import TabBar from '../common/TapBar';
import GoodsItemTab from './GoodsItemTab';
import LocationTab from './LocationTab';
import MapImg from '@images/affiliateditems/Map.png';

const GoodsTab = forwardRef<HTMLDivElement, { preloadImages: string[] }>(
  ({ preloadImages }, ref) => {
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
          tabTitles={['굿즈', '수령/구매 위치']}
          tabContents={[<GoodsItemTab preloadImages={preloadImages} />, <LocationTab />]}
        />
      </div>
    );
  },
);

export default GoodsTab;
