import * as S from '@styles/event/EventTabStyle';
import { forwardRef, useState } from 'react';
import ImgSwitcher from '../common/ImgSwitcher';
import { EventDropdownList, EventList } from '@/constants/event';
import NoticeTitleField from '../common/NoticeTitleField';

const EventTab = forwardRef<HTMLDivElement, { preloadImages: string[] }>(
  ({ preloadImages }, ref) => {
    const [selectedId, setSelectedId] = useState(0);

    const isPrevDisabled = selectedId === 0;
    const isNextDisabled = selectedId === EventList.length - 1;

    const handlePrev = () => {
      setSelectedId(prev => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
      setSelectedId(prev => Math.min(prev + 1, EventList.length - 1));
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
        <NoticeTitleField data={EventList[selectedId]} />
        <S.CircleWrap>
          {EventList.map((_, index) => (
            <S.Circle key={index} $selected={selectedId === index} />
          ))}
        </S.CircleWrap>
        <S.DropdownWrap>
          {EventDropdownList.map((data, index) => (
            <div key={index}>
              <S.DropdownTitle $isLast={index === EventDropdownList.length - 1}>
                {data.title}
              </S.DropdownTitle>
              {data.item?.map((item, idx) => (
                <S.DropdownItemWrap key={idx}>
                  <h2>{item.title}</h2>
                </S.DropdownItemWrap>
              ))}
            </div>
          ))}
        </S.DropdownWrap>
      </div>
    );
  },
);

export default EventTab;
