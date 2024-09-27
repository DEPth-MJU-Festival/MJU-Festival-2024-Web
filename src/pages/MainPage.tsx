import * as S from '@styles/main/MainPageStyle';
import NoticeBtn from '@components/main/NoticeBtn';
import NavigationBar from '@components/main/NavigationBar';
import { useState } from 'react';

const MainPage = () => {
  const [selectedBar, setSelectedBar] = useState(0);

  return (
    <div>
      <S.BtnWrap>
        <NoticeBtn />
      </S.BtnWrap>
      <NavigationBar
        selectedBar={selectedBar}
        setSelectedBar={setSelectedBar}
      />
      <div style={{ height: 1300 }}></div>
    </div>
  );
};

export default MainPage;
