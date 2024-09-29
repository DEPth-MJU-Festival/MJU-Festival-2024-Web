import * as S from '@styles/common/RenderIconStyle';
import { TIconPosition } from '@/types/timetable';

const RenderIcon = (
  position: TIconPosition,
  rotation: number,
  padding: number,
  Icon: React.FC<React.SVGProps<SVGSVGElement>>,
) => {
  const PositionComponent = S[position as keyof typeof S];
  return (
    <PositionComponent $padding={padding}>
      <Icon style={{ transform: `rotate(${rotation}deg)` }} />
    </PositionComponent>
  );
};

export default RenderIcon;
