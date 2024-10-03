import SaeroLeader from '@/components/saero/SaeroLeader';
import Saero from '@assets/images/saero/Saero.svg?react';
import * as S from '@styles/saero/SaeroPage';

const SaeroPage = () => {
  return (
    <S.Container>
      <S.Title>명지대학교 인문캠퍼스 제 51대 총학생회</S.Title>
      <S.SearoContainer>
        <Saero />
        <S.SaeroTitle>새롭게, 더 나아가게</S.SaeroTitle>
      </S.SearoContainer>
      <SaeroLeader />
    </S.Container>
  );
};

export default SaeroPage;
