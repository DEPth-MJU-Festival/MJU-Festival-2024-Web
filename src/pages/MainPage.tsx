import * as S from '@styles/main/MainPageStyle';
import NoticeBtn from '@components/main/NoticeBtn';
import NavigationBar from '@components/main/NavigationBar';
import { useState } from 'react';
import MainTab from '@components/main/MainTab';
import TimeTableTab from '@components/timetable/TimeTableTab';
import LineupTab from '@/components/lineup/LineupTab';

const MainPage = () => {
  const [selectedBar, setSelectedBar] = useState(0);

  const renderTab = () => {
    switch (selectedBar) {
      case 0:
        return <MainTab />;
      case 1:
        return <TimeTableTab />;
      case 2:
        return <LineupTab />;
      default:
        return <MainTab />;
    }
  };

  return (
    <div>
      <S.BtnWrap>
        <NoticeBtn />
      </S.BtnWrap>
      <NavigationBar
        selectedBar={selectedBar}
        setSelectedBar={setSelectedBar}
      />
      {renderTab()}
    </div>
  );
};

export default MainPage;
