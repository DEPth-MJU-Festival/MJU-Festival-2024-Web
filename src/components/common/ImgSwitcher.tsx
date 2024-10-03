import * as S from '@styles/common/ImgSwitcherStyle';
import ChevronLeftBigIcon from '@icons/header/ChevronLeftBig.svg?react';
import { useState } from 'react';

const ImgSwitcher = ({
  img,
  handlePrev,
  isPrevDisabled,
  handleNext,
  isNextDisabled,
  paddingTop,
}: {
  img: string;
  handlePrev: () => void;
  isPrevDisabled: boolean;
  handleNext: () => void;
  isNextDisabled: boolean;
  paddingTop: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <S.ImgWrap>
      <div
        style={{ position: 'relative', width: '100%', paddingTop: paddingTop }}
      >
        <img
          src={img}
          onLoad={() => setIsLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            borderRadius: 6,
            boxShadow: '0px 0px 8px 0px rgba(141, 166, 212, 0.3)',
          }}
        />
      </div>
      <S.IconBtn
        onClick={handlePrev}
        disabled={isPrevDisabled}
        style={{
          left: 0,
          marginLeft: '-32px',
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
          marginRight: '-32px',
        }}
      >
        <ChevronLeftBigIcon
          width={36}
          height={36}
          color={isNextDisabled ? '#D9E0F0' : '#1A2530'}
        />
      </S.IconBtn>
    </S.ImgWrap>
  );
};

export default ImgSwitcher;
