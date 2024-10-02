import * as S from '@styles/common/ImgSwitcherStyle';
import ChevronLeftBigIcon from '@icons/header/ChevronLeftBig.svg?react';
import React from 'react';

const ImgSwitcher = ({
  img,
  handlePrev,
  isPrevDisabled,
  handleNext,
  isNextDisabled,
  setIsLoading,
}: {
  img: string;
  handlePrev: () => void;
  isPrevDisabled: boolean;
  handleNext: () => void;
  isNextDisabled: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <S.ImgWrap>
      <img
        src={img}
        width="100%"
        onLoad={() => setIsLoading && setIsLoading(false)}
        loading="eager"
      />
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
