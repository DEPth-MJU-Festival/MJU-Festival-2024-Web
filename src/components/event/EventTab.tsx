import * as S from '@styles/event/EventTabStyle';
import { forwardRef, useState } from 'react';
import ImgSwitcher from '../common/ImgSwitcher';
import { EventDropdownList, EventList } from '@/constants/event';
import NoticeTitleField from '../common/NoticeTitleField';
import ChevronLeftIcon from '@icons/header/ChevronLeft.svg?react';

const EventTab = forwardRef<HTMLDivElement, { preloadImages: string[] }>(
  ({ preloadImages }, ref) => {
    const [selectedId, setSelectedId] = useState(0);
    const [isDressOpen, setIsDressOpen] = useState(false);
    const [isZipOpen, setIsZipOpen] = useState(false);

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
                <div key={idx}>
                  <S.DropdownItemWrap
                    $isDescription={item.description !== undefined}
                    $selected={
                      item.title === '드레스 코드'
                        ? isDressOpen
                        : item.title === '낭만 모음.zip'
                        ? isZipOpen
                        : false
                    }
                    onClick={() =>
                      item.title === '드레스 코드'
                        ? setIsDressOpen(prev => !prev)
                        : item.title === '낭만 모음.zip'
                        ? setIsZipOpen(prev => !prev)
                        : null
                    }
                  >
                    <h2>{item.title}</h2>
                    {item.description !== undefined && (
                      <ChevronLeftIcon color={'var(--BlueBlack)'} />
                    )}
                  </S.DropdownItemWrap>
                  {item.title === '드레스 코드' && isDressOpen && (
                    <S.DropdownItem>{item.description}</S.DropdownItem>
                  )}
                  {item.title === '낭만 모음.zip' && isZipOpen && (
                    <S.DropdownItem>{item.description}</S.DropdownItem>
                  )}
                </div>
              ))}
            </div>
          ))}
        </S.DropdownWrap>
      </div>
    );
  },
);

export default EventTab;
