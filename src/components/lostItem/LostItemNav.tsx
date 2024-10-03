import { LostItemNaviList } from '@/constants/LostItem';
import { NaviTapType } from '@/types/lostItem';
import * as S from '@styles/lostItem/LostItemNav';

const LostItemNav = ({
  naviTap,
  setNaviTap,
}: {
  naviTap: NaviTapType;
  setNaviTap: (tap: NaviTapType) => void;
}) => {
  return (
    <S.Container>
      {LostItemNaviList.map((tap, index) => (
        <S.NavItem
          key={index}
          isActive={tap === naviTap}
          onClick={() => setNaviTap(tap)}
        >
          {tap}
        </S.NavItem>
      ))}
    </S.Container>
  );
};

export default LostItemNav;
