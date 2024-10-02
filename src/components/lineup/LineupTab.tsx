import * as S from '@styles/lineup/LineupTabStyle';
import { forwardRef, useState } from 'react';
import ImgSwitcher from '../common/ImgSwitcher';
import NoticeTitleField from '../common/NoticeTitleField';

type Props = {
  LineupItem: {
    id: number;
    img: string;
    caption: string;
    title: string;
  }[];
};

const LineupTab = forwardRef<HTMLDivElement, Props>(({ LineupItem }, ref) => {
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
    <div ref={ref} style={{ minHeight: 550 }}>
      <ImgSwitcher
        img={LineupItem[selectedId].img}
        handlePrev={handlePrev}
        isPrevDisabled={isPrevDisabled}
        handleNext={handleNext}
        isNextDisabled={isNextDisabled}
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
