import { LineupItem } from '@constants/lineup';
import * as S from '@styles/lineup/LineupTabStyle';
import { forwardRef, useState } from 'react';
import ImgSwitcher from '../common/ImgSwitcher';
import NoticeTitleField from '../common/NoticeTitleField';

const LineupTab = forwardRef<HTMLDivElement, { preloadImages: string[] }>(
  ({ preloadImages }, ref) => {
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
          img={preloadImages[selectedId]}
          handlePrev={handlePrev}
          isPrevDisabled={isPrevDisabled}
          handleNext={handleNext}
          isNextDisabled={isNextDisabled}
          paddingTop="116.5%"
        />
        <NoticeTitleField data={LineupItem[selectedId]} />
        <S.CircleWrap>
          {LineupItem.map((_, index) => (
            <S.Circle key={index} $selected={selectedId === index} />
          ))}
        </S.CircleWrap>
      </div>
    );
  },
);

export default LineupTab;
