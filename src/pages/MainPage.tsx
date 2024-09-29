import * as S from '@styles/main/MainPageStyle';
import NoticeBtn from '@components/main/NoticeBtn';
import NavigationBar from '@components/main/NavigationBar';
import { useCallback, useEffect, useRef, useState } from 'react';
import MainTab from '@components/main/MainTab';
import TimeTableTab from '@components/timetable/TimeTableTab';
import LineupTab from '@components/lineup/LineupTab';
import BoothFoodTab from '@components/boothfood/BoothFoodTab';
import FleaMarketTab from '@components/fleamarket/FleaMarketTab';

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
