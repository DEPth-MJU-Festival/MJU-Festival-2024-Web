import * as S from '@styles/saero/SaeroMemberComponent';

const SaeroMemberComponent = ({
  position,
  name,
  major,
}: {
  position: string;
  name: string;
  major: string;
}) => {
  return (
    <S.Container>
      <S.Position>{position}</S.Position>
      <S.Name>{name}</S.Name>
      <S.Major>{major}</S.Major>
    </S.Container>
  );
};

export default SaeroMemberComponent;
