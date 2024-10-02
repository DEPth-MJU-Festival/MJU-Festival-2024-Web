import TimetableImg from '@images/timetable/Timetable.png';
import BoothTimeTable from './BoothTimeTable';
import { forwardRef } from 'react';

const TimeTableTab = forwardRef<HTMLDivElement, { preloadImage: string }>(
  ({ preloadImage }, ref) => {
    return (
      <div ref={ref}>
        <img src={preloadImage} width="100%" />
        <BoothTimeTable />
        <img src={TimetableImg} width="100%" />
      </div>
    );
  },
);

export default TimeTableTab;
