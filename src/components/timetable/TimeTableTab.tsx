import MapImg from '@images/timetable/Map.svg';
import TimetableImg from '@images/timetable/Timetable.png';
import BoothTimeTable from './BoothTimeTable';
import { forwardRef, Suspense } from 'react';

const TimeTableTab = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Suspense>
      <div ref={ref}>
        <img src={MapImg} width="100%" />
        <BoothTimeTable />
        <img src={TimetableImg} width="100%" />
      </div>
    </Suspense>
  );
});

export default TimeTableTab;
