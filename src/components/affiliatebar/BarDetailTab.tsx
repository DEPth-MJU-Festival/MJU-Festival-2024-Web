import ImgSwitcher from '../common/ImgSwitcher';
import { AffiliateBarList } from '@/constants/affiliatebar';
import CalendarIcon from '@icons/header/Calendar.svg?react';
import GoogleMapsIcon from '@icons/header/GoogleMaps.svg?react';
import LocationIcon from '@icons/header/Location.svg?react';
import * as S from '@styles/affiliatebar/BarDetailTabStyle';

const BarDetailTab = ({
  selectedId,
  setSelectedId,
}: {
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const isPrevDisabled = selectedId === 0;
  const isNextDisabled = selectedId === AffiliateBarList.length - 1;

  const handlePrev = () => {
    setSelectedId(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSelectedId(prev => Math.min(prev + 1, AffiliateBarList.length - 1));
  };

  return (
    <S.Container>
      <ImgSwitcher
        img={AffiliateBarList[selectedId].bigImg}
        handlePrev={handlePrev}
        isPrevDisabled={isPrevDisabled}
        handleNext={handleNext}
        isNextDisabled={isNextDisabled}
      />
      <h1>{AffiliateBarList[selectedId].title}</h1>
      <S.DetailWrap>
        <S.PromotionWrap>
          <h2>프로모션 내용</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: AffiliateBarList[selectedId].description.replace(
                / {4,}/g,
                '&nbsp;&nbsp;&nbsp;&nbsp;',
              ),
            }}
          />
        </S.PromotionWrap>
        <S.InforWrap>
          <S.InforWrap>
            <CalendarIcon color="var(--SoftBlue)" />
            <p>제휴 기간 : 2024/10/07 ~ 10/08</p>
          </S.InforWrap>
          <S.InforWrap>
            <GoogleMapsIcon color="var(--SoftBlue)" />
            <p>{AffiliateBarList[selectedId].location}</p>
          </S.InforWrap>
        </S.InforWrap>
        <S.LinkBtn>
          <LocationIcon color="var(--PaleYellow)" />
          <p>네이버 지도 앱으로 이동</p>
        </S.LinkBtn>
      </S.DetailWrap>
    </S.Container>
  );
};

export default BarDetailTab;
