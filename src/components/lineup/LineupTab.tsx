import { LineupItem } from '@constants/lineup';
import * as S from '@styles/lineup/LineupTabStyle';
import { forwardRef, useEffect, useState } from 'react';
import ImgSwitcher from '../common/ImgSwitcher';
import NoticeTitleField from '../common/NoticeTitleField';

const LineupTab = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedId, setSelectedId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isPrevDisabled = selectedId === 0;
  const isNextDisabled = selectedId === LineupItem.length - 1;

  useEffect(() => {
    LineupItem.forEach(item => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  const handlePrev = () => {
    setSelectedId(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSelectedId(prev => Math.min(prev + 1, LineupItem.length - 1));
  };

  return (
    <div
      ref={ref}
      style={{
        height: isLoading ? 1500 : 'auto',
      }}
    >
      <ImgSwitcher
        img={LineupItem[selectedId].img}
        handlePrev={handlePrev}
        isPrevDisabled={isPrevDisabled}
        handleNext={handleNext}
        isNextDisabled={isNextDisabled}
        setIsLoading={setIsLoading}
      />
      <NoticeTitleField data={LineupItem[selectedId]} />
      <S.CircleWrap>
        {LineupItem.map((_, index) => (
          <S.Circle key={index} $selected={selectedId === index} />
        ))}
      </S.CircleWrap>
    </div>
  );
});

export default LineupTab;
