import BorderLong from '@assets/icons/border/BorderLong.svg?react';
import BorderLongRight from '@assets/icons/border/BorderLongRight.svg?react';

import * as S from '@styles/lostItem/LostItemBanner';

const LostItemBanner = () => {
  return (
    <S.Container>
      <S.BorderContainer>
        <BorderLong />
        <BorderLongRight />
      </S.BorderContainer>
      <>
        <S.Title>분실물 안내</S.Title>
        <S.Border />
        <S.SubTitle>축제 기간 내 접수된 분실물입니다.</S.SubTitle>
        <S.Content>
          이미지 내에 분실물이 있으신 분은 <br />
          <span>응급부스</span>로 해당 분실물을
          <br />
          찾으러 와 주시기 바랍니다.
        </S.Content>
      </>
      <S.BorderContainer style={{ marginTop: '-30px' }}>
        <BorderLongRight style={{ transform: `rotate(180deg)` }} />
        <BorderLong style={{ transform: `rotate(180deg)` }} />
      </S.BorderContainer>
    </S.Container>
  );
};

export default LostItemBanner;
