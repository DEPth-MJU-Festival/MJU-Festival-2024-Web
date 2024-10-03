import LostItemTab from '@/components/lostItem/LostItemTab';
import AffiliateBarTab from '@components/affiliatebar/AffiliateBarTab';
import BoothFoodTab from '@components/boothfood/BoothFoodTab';
import FleaMarketTab from '@components/fleamarket/FleaMarketTab';
import LineupTab from '@components/lineup/LineupTab';
import MainTab from '@components/main/MainTab';
import NavigationBar from '@components/main/NavigationBar';
import NoticeBtn from '@components/main/NoticeBtn';
import TimeTableTab from '@components/timetable/TimeTableTab';
import * as S from '@styles/main/MainPageStyle';
import { useCallback, useEffect, useRef, useState } from 'react';
import AffiliateBarTab from '@components/affiliatebar/AffiliateBarTab';
import EventTab from '@/components/event/EventTab';
import AffiliatedItemsTab from '@/components/affiliateditems/AffiliatedItemsTab';
import GoodsTab from '@/components/goods/GoodsTab';
import { LineupItem } from '@/constants/lineup';
import { EventList } from '@/constants/event';
import MapTextImg from '@images/timetable/Map.svg';
import MapImg from '@images/boothfood/Map.png';
import { GoodsList } from '@/constants/goods';
import { FleaMarketList } from '@/constants/fleamarket';
import { AffiliateBarList } from '@/constants/affiliatebar';
import { AffiliatedItemList } from '@/constants/affiliateditems';
import PosterImg from '@images/main/Poster.png';

const preloadLineupImages = LineupItem.map(item => item.img);
const preloadEventImages = EventList.map(item => item.img);
const preloadGoodsImages = GoodsList.map(item => item.img);
const preloadFleaMarketImages = FleaMarketList.map(item => item.img);
const preloadBarImages = AffiliateBarList.map(item => item.img);
const preloadItemImages = AffiliatedItemList.flatMap(item =>
  item.item.map(data => data.img),
);

const MainPage = () => {
  const [selectedBar, setSelectedBar] = useState(-1);
  const [navigationHeight, setNavigationHeight] = useState(0);
  const navigationBarRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const preloadImages = [
      PosterImg,
      MapImg,
      MapTextImg,
      ...preloadLineupImages,
      ...preloadEventImages,
      ...preloadFleaMarketImages,
      ...preloadBarImages,
      ...preloadItemImages,
      ...preloadGoodsImages,
    ];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (navigationBarRef.current) {
      setNavigationHeight(navigationBarRef.current.offsetHeight);
    }
  }, [selectedBar]);

  // 자동 스크롤
  const scrollToTab = useCallback(
    (index: number) => {
      const tab = tabRefs.current[index];
      if (tab) {
        const offset = navigationHeight + 94;
        const scrollPosition =
          tab.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }
    },
    [navigationHeight],
  );

  useEffect(() => {
    scrollToTab(selectedBar);
  }, [scrollToTab, selectedBar]);

  const handleBarClick = (id: number) => {
    if (selectedBar === id) {
      scrollToTab(id);
    } else {
      setSelectedBar(id);
    }
  };

  const renderTab = () => {
    switch (selectedBar) {
      case 0:
        return (
          <MainTab
            ref={el => (tabRefs.current[0] = el)}
            preloadImage={PosterImg}
          />
        );
      case 1:
        return (
          <TimeTableTab
            ref={el => (tabRefs.current[1] = el)}
            preloadImage={MapTextImg}
          />
        );
      case 2:
        return (
          <LineupTab
            ref={el => (tabRefs.current[2] = el)}
            preloadImages={preloadLineupImages}
          />
        );
      case 3:
        return (
          <BoothFoodTab
            ref={el => (tabRefs.current[3] = el)}
            preloadImage={MapImg}
            navigationHeight={navigationHeight}
          />
        );
      case 4:
        return (
          <FleaMarketTab
            ref={el => (tabRefs.current[4] = el)}
            preloadImages={preloadFleaMarketImages}
          />
        );
      case 5:
        return (
          <EventTab
            ref={el => (tabRefs.current[5] = el)}
            preloadImages={preloadEventImages}
          />
        );
      case 6:

        return (
          <AffiliateBarTab
            ref={el => (tabRefs.current[6] = el)}
            preloadImages={preloadBarImages}
          />
        );
      case 7:
        return (
          <AffiliatedItemsTab
            ref={el => (tabRefs.current[7] = el)}
            preloadImages={preloadItemImages}
          />
        );
      case 8:
        return (
          <GoodsTab
            ref={el => (tabRefs.current[8] = el)}
            preloadImages={preloadGoodsImages}
          />
        );
      case 9:
        return <LostItemTab ref={el => (tabRefs.current[9] = el)} />;
      default:
        return (
          <MainTab
            ref={el => (tabRefs.current[0] = el)}
            preloadImage={PosterImg}
          />
        );
    }
  };

  return (
    <div>
      <S.BtnWrap>
        <NoticeBtn />
      </S.BtnWrap>
      <NavigationBar
        ref={navigationBarRef}
        selectedBar={selectedBar}
        setSelectedBar={handleBarClick}
      />
      {renderTab()}
    </div>
  );
};

export default MainPage;
