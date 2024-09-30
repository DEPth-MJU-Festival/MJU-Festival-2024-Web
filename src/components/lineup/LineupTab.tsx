import { LineupItem } from '@constants/lineup';
import * as S from '@styles/lineup/LineupTabStyle';
import { forwardRef, useState } from 'react';
import RenderIcon from '../common/RenderIcon';
import BorderIcon from '@icons/border/Border.svg?react';
import ImgSwitcher from '../common/ImgSwitcher';

const LineupTab = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedId, setSelectedId] = useState(0);
  const isPrevDisabled = selectedId === 0;
  const isNextDisabled = selectedId === LineupItem.length - 1;

  const handlePrev = () => {
    setSelectedId(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSelectedId(prev => Math.min(prev + 1, LineupItem.length - 1));
  };

  return (
    <div ref={ref}>
      <ImgSwitcher
        img={LineupItem[selectedId].img}
        handlePrev={handlePrev}
        isPrevDisabled={isPrevDisabled}
        handleNext={handleNext}
        isNextDisabled={isNextDisabled}
      />
      <S.NameWrap>
        {RenderIcon('LeftTop', 0, 16, BorderIcon)}
        {RenderIcon('RightTop', 90, 16, BorderIcon)}
        {RenderIcon('RightBottom', 180, 16, BorderIcon)}
        {RenderIcon('LeftBottom', 270, 16, BorderIcon)}
        <h3>DAY {LineupItem[selectedId].day}</h3>
        <hr />
        <h1>{LineupItem[selectedId].name}</h1>
      </S.NameWrap>
      <S.CircleWrap>
        {LineupItem.map((_, index) => (
          <S.Circle key={index} $selected={selectedId === index} />
        ))}
      </S.CircleWrap>
    </div>
  );
});

export default LineupTab;
