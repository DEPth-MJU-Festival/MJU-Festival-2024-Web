import { LineupItem } from '@/constants/lineup';
import * as S from '@styles/lineup/LineupTabStyle';
import { forwardRef, useState } from 'react';
import ChevronLeftBigIcon from '@icons/header/ChevronLeftBig.svg?react';
import RenderIcon from '../timetable/RenderIcon';

const LineupTab = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedId, setSelectedId] = useState(0);
  const isPrevDisabled = selectedId === 0;
  const isNextDisabled = selectedId === LineupItem.length - 1;

  const handleNext = () => {
    setSelectedId(prev => Math.min(prev + 1, LineupItem.length - 1));
  };

  const handlePrev = () => {
    setSelectedId(prev => Math.max(prev - 1, 0));
  };

  return (
    <S.Container ref={ref}>
      <S.ImgWrap>
        <img src={LineupItem[selectedId].img} width="100%" />
        <S.IconBtn
          onClick={handlePrev}
          disabled={isPrevDisabled}
          style={{
            left: 0,
            marginLeft: '-27.5px',
          }}
        >
          <ChevronLeftBigIcon
            width={36}
            height={36}
            color={isPrevDisabled ? '#D9E0F0' : '#1A2530'}
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </S.IconBtn>
        <S.IconBtn
          onClick={handleNext}
          disabled={isNextDisabled}
          style={{
            right: 0,
            marginRight: '-27.5px',
          }}
        >
          <ChevronLeftBigIcon
            width={36}
            height={36}
            color={isNextDisabled ? '#D9E0F0' : '#1A2530'}
          />
        </S.IconBtn>
      </S.ImgWrap>
      <S.NameWrap>
        {RenderIcon('LeftTop', 0, 16)}
        {RenderIcon('RightTop', 90, 16)}
        {RenderIcon('RightBottom', 180, 16)}
        {RenderIcon('LeftBottom', 270, 16)}
        <h3>DAY {LineupItem[selectedId].day}</h3>
        <hr />
        <h1>{LineupItem[selectedId].name}</h1>
      </S.NameWrap>
      <S.CircleWrap>
        {LineupItem.map((_, index) => (
          <S.Circle key={index} $selected={selectedId === index} />
        ))}
      </S.CircleWrap>
    </S.Container>
  );
});

export default LineupTab;
