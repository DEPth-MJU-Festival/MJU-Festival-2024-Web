import * as S from '@styles/timetable/RenderIconStyle';
import { TIconPosition } from '@/types/timetable';
import BorderIcon from '@icons/border/Border.svg?react';

const RenderIcon = (
  position: TIconPosition,
  rotation: number,
  padding: number,
) => {
  const PositionComponent = S[position as keyof typeof S];
  return (
    <PositionComponent $padding={padding}>
      <BorderIcon style={{ transform: `rotate(${rotation}deg)` }} />
    </PositionComponent>
  );
};

export default RenderIcon;
