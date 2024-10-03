import * as S from '@styles/saero/SaereLeader';
import SaeroMemberComponent from './SaeroMemberComponent';

const SaeroLeader = () => {
  return (
    <S.Container>
      <S.Team>회장단</S.Team>
      <S.ComponentContainer>
        <SaeroMemberComponent
          position={'회장'}
          name={'안찬희'}
          major={'국통 19'}
        />
        <SaeroMemberComponent
          position={'부회장'}
          name={'김신우'}
          major={'국문 20'}
        />
      </S.ComponentContainer>
    </S.Container>
  );
};

export default SaeroLeader;
