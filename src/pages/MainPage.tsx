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

const MainPage = () => {
  const [selectedBar, setSelectedBar] = useState(0);
  const [navigationHeight, setNavigationHeight] = useState(0);
  const navigationBarRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (navigationBarRef.current) {
      setNavigationHeight(navigationBarRef.current.offsetHeight);
    }
  }, [selectedBar]);

  //자동 스크롤
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

  const renderTab = () => {
    switch (selectedBar) {
      case 0:
        return <MainTab ref={el => (tabRefs.current[0] = el)} />;
      case 1:
        return <TimeTableTab ref={el => (tabRefs.current[1] = el)} />;
      case 2:
        return <LineupTab ref={el => (tabRefs.current[2] = el)} />;
      case 3:
        return (
          <BoothFoodTab
            ref={el => (tabRefs.current[3] = el)}
            navigationHeight={navigationHeight}
          />
        );
      case 4:
        return <FleaMarketTab ref={el => (tabRefs.current[4] = el)} />;
      case 6:
        return <AffiliateBarTab ref={el => (tabRefs.current[6] = el)} />;
      case 9:
        return <LostItemTab ref={el => (tabRefs.current[9] = el)} />;
      default:
        return <MainTab ref={el => (tabRefs.current[0] = el)} />;
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
        setSelectedBar={setSelectedBar}
      />
      {renderTab()}
    </div>
  );
};

export default MainPage;
