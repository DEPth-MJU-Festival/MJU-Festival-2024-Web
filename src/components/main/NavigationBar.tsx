import { NavigationBarItem } from '@/constants/main';
import * as S from '@styles/main/NavigationBar';
import { forwardRef, useCallback, useEffect, useRef } from 'react';

const NavigationBar = forwardRef<
  HTMLDivElement,
  {
    selectedBar: number;
    setSelectedBar: React.Dispatch<React.SetStateAction<number>>;
  }
>(({ selectedBar, setSelectedBar }, ref) => {
  const containerRef = ref as React.RefObject<HTMLDivElement>;
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  //선택된 네비게이션 항목을 컨테이너의 중앙으로 스크롤
  const scrollToCenter = useCallback(
    (index: number) => {
      const container = containerRef.current;
      const item = itemRefs.current[index];

      if (container && item) {
        //스크롤 위치 계산
        const scrollPosition =
          item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    },
    [containerRef],
  );

  //selectedBar가 변경될 때 스크롤 이동
  useEffect(() => {
    const selectedIndex = NavigationBarItem.findIndex(
      item => item.id === selectedBar,
    );
    if (selectedIndex !== -1) {
      scrollToCenter(selectedIndex);
    }
  }, [selectedBar, scrollToCenter]);

  return (
    <S.Container ref={containerRef}>
      {NavigationBarItem.map((data, index) => {
        return (
          <S.NavigationWrap
            key={index}
            ref={el => (itemRefs.current[index] = el)}
            onClick={() => setSelectedBar(data.id)}
            $selected={selectedBar === data.id}
          >
            <S.NavigationText $selected={selectedBar === data.id}>
              {data.text}
            </S.NavigationText>
            {index < NavigationBarItem.length - 1 && <S.Line />}
          </S.NavigationWrap>
        );
      })}
    </S.Container>
  );
});

export default NavigationBar;
